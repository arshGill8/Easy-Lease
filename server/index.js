import express from "express";
import cors from "cors";
import path from "path";
import { PDFDocument } from "pdf-lib";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
import { body, validationResult } from "express-validator";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import dotenv from "dotenv";

dotenv.config();
// ✅ Initialize Express app
const app = express();
const port = process.env.PORT || 3001;

// ✅ Configure Winston logger with rotating logs
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new DailyRotateFile({
      filename: "logs/error-%DATE%.log",
      level: "error",
      datePattern: "YYYY-MM-DD",
      maxFiles: "14d",
    }),
    new DailyRotateFile({
      filename: "logs/combined-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      maxFiles: "14d",
    }),
  ],
});

// ✅ Validate required environment variables
if (!process.env.PDF_TEMPLATE_PATH) {
  logger.error("❌ Error: PDF_TEMPLATE_PATH environment variable is missing.");
  process.exit(1);
}

if (!process.env.ALLOWED_ORIGIN) {
  logger.error("❌ Error: ALLOWED_ORIGIN environment variable is missing.");
  process.exit(1);
}

// ✅ Rate limiter per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per IP
  message: "Too many requests from this IP, please try again later.",
  keyGenerator: (req) => req.ip, // Apply per IP
});

// ✅ Middleware
// Trust the first proxy hop so req.ip reflects the real client (rate limiter relies on this).
app.set("trust proxy", 1);
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN,
    methods: "GET,POST",
  })
);
app.use(helmet());
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true, limit: "2mb" }));

// ✅ Environment variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pdfPath = path.join(__dirname, process.env.PDF_TEMPLATE_PATH);

// ✅ Request Logger Middleware
app.use((req, res, next) => {
  logger.info({
    message: "Incoming request",
    method: req.method,
    url: req.url,
    ip: req.ip,
  });
  next();
});

// ✅ Health check endpoint
app.get("/health", (req, res) => res.status(200).json({ status: "healthy" }));

// ✅ Root endpoint
app.get("/", (req, res) => res.send("Easy Lease API is Running 🚀"));

// ✅ Input validation rules
const validateFormData = [
  body("landlordName").isArray().optional(),
  body("tenantName").isArray().optional(),
  body("rentalUnit").isObject().optional(),
  body("contactInfo").isObject().optional(),
  body("leaseTermInfo").isObject().optional(),
  body("depositInfo").isObject().optional(),
  body("utilityInfo").isObject().optional(),
  body("landlordSignature").isArray().optional(),
  body("tenantSignature").isArray().optional(),
];

// ✅ Helper functions
function setFormField(form, fieldName, value) {
  try {
    const field = form.getField(fieldName);
    field.setText(value ?? "");
  } catch (error) {
    logger.warn(`⚠️ Warning: Field '${fieldName}' not found.`);
  }
}

function setCheckBox(form, fieldName, condition) {
  try {
    const checkBox = form.getCheckBox(fieldName);
    condition ? checkBox.check() : checkBox.uncheck();
  } catch (error) {
    logger.warn(`⚠️ Warning: Checkbox '${fieldName}' not found.`);
  }
}

async function embedSignature(pdfDoc, page, imageData, x, y) {
  if (!imageData) return;
  try {
    const base64 = imageData.replace(/^data:image\/png;base64,/, "");
    const image = await pdfDoc.embedPng(base64);
    const { width, height } = image.scale(0.17);

    page.drawImage(image, { x, y, width, height });
  } catch (error) {
    logger.error("❌ Error embedding signature:", error);
  }
}

// ✅ Create Form API
app.post("/createForm", limiter, validateFormData, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      logger.warn("Invalid form data received", { errors: errors.array() });
      return res.status(400).json({ errors: errors.array() });
    }

    // ✅ Extract Redux state into correct format
    const formattedLandlordName = (req.body.landlordName || []).map(
      (item) => item.landlordName
    );

    const formattedTenantName = (req.body.tenantName || []).map(
      (item) => item.tenantName
    );

    const LandlordSignature = (req.body.landlordSignature || []).map(
      ({ landlordName, landlordSign, landlordSignDate }) => ({
        landlordName,
        landlordSign,
        landlordSignDate,
      })
    );

    const TenantSignature = (req.body.tenantSignature || []).map(
      ({ tenantName, tenantSign, tenantSignDate }) => ({
        tenantName,
        tenantSign,
        tenantSignDate,
      })
    );

    // ✅ Load the PDF template with error handling
    let pdfDoc;
    try {
      pdfDoc = await PDFDocument.load(await readFile(pdfPath));
    } catch (error) {
      logger.error("❌ Error loading PDF template:", error);
      return res.status(500).json({ error: "Could not load PDF template." });
    }

    const form = pdfDoc.getForm();

    // 🔹 Fill Landlord & Tenant Names
    [
      "txtseller1",
      "txtseller2",
      "txtseller3",
      "txtseller4",
      "txtLandlord5",
    ].forEach((field, i) =>
      setFormField(form, field, formattedLandlordName[i] || "")
    );

    [
      "txtbuyer1FName",
      "txtbuyer2FName",
      "txtbuyer3FName",
      "txtbuyer4FName",
    ].forEach((field, i) =>
      setFormField(form, field, formattedTenantName[i] || "")
    );

    // 🔹 Fill Rental Property Info
    setFormField(form, "txtp_unitNumber", req.body.rentalUnit?.unit || "");
    setFormField(form, "txtp_street", req.body.rentalUnit?.streetName || "");
    setCheckBox(form, "inCondo_y", req.body.rentalUnit?.inCondo === "yes");

    // 🔹 Embed Signatures
    const pages = pdfDoc.getPages();
    if (pages.length < 7) {
      logger.error("❌ PDF does not have enough pages for signatures.");
      return res
        .status(500)
        .send("Error: PDF template is missing required pages.");
    }
    const signPage = pages[6];

    await Promise.all(
      LandlordSignature.map(async (sign, i) => {
        //Embed the signature
        await embedSignature(
          pdfDoc,
          signPage,
          sign.landlordSign,
          300,
          523 - i * 40
        );
        // Set the name and date fields
        try {
          form
            .getTextField(`txtsellersig${i + 1}`)
            .setText(sign.landlordName || "");
          form.getTextField(`sig${i + 1}_date`).setText(sign.landlordSignDate);
        } catch (error) {
          logger.warn(
            `⚠️ Could not set name/date for landlord ${i + 1}:`,
            error
          );
        }
      })
    );

    await Promise.all(
      TenantSignature.map(async (sign, i) => {
        await embedSignature(
          pdfDoc,
          signPage,
          sign.tenantSign,
          300,
          318 - i * 40
        );

        try {
          form
            .getTextField(`txtbuyersig${i + 1}`)
            .setText(sign.tenantName || "");
          form.getTextField(`tsig${i + 1}_date`).setText(sign.tenantSignDate);
        } catch (error) {
          logger.warn(
            `⚠️ Could not set name/date for tenant ${i + 1}:`,
            error
          );
        }
      })
    );

    form.flatten();

    // 🔹 Send the PDF Directly
    const pdfBytes = await pdfDoc.save();
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="lease_form.pdf"'
    );
    res.setHeader("Content-Type", "application/pdf");
    res.send(Buffer.from(pdfBytes));

    logger.info("✅ PDF successfully generated and sent!");
  } catch (error) {
    logger.error("❌ Error generating PDF:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ✅ Start the server
const server = app.listen(port, () =>
  logger.info(`🚀 Server running at http://127.0.0.1:${port}`)
);
