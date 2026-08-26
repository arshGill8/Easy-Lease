import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import DownloadIcon from "../../common/DownloadIcon";

export default function ThankYou() {
  const [status, setStatus] = useState("idle");
  const landlordName = useSelector((state) => state.landlordName);
  const tenantName = useSelector((state) => state.tenantName);
  const tenantSignature = useSelector((state) => state.tenantSignature);
  const landlordSignature = useSelector((state) => state.landlordSignature);
  const contactInfo = useSelector((state) => state.contactInfo);
  const depositInfo = useSelector((state) => state.depositInfo);
  const leaseTermInfo = useSelector((state) => state.leaseTermInfo);
  const rentalUnit = useSelector((state) => state.rentalUnit);
  const utilityInfo = useSelector((state) => state.utilityInfo);

  const downloadPDF = () => {
    setStatus("loading");
    axios({
      url: "https://easy-lease-api.onrender.com/createForm", // Updated URL
      // url: "http://localhost:3001/createForm",
      method: "POST",
      responseType: "blob", // Important
      data: {
        landlordName,
        tenantName,
        tenantSignature,
        landlordSignature,
        contactInfo,
        depositInfo,
        leaseTermInfo,
        rentalUnit,
        utilityInfo,
      },
    })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "output.pdf"); // or any other extension
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        setStatus("success");
      })
      .catch((error) => {
        console.error("Error downloading the PDF:", error);
        setStatus("error");
      });
  };

  return (
    <div className="text-center py-10 flex flex-col items-center ">
      <div className="w-14 h-14 rounded-full bg-green-100 text-green-700 grid place-items-center text-2xl mb-5" aria-hidden="true">✓</div>
      <div className="mb-4">
        <h2 className="lg:text-xl tracking-wide">
          Your lease is ready
        </h2>
      </div>
      <button
        onClick={downloadPDF}
        disabled={status === "loading"}
        type="button"
        className="flex gap-3 text-white bg-green-500 hover:bg-green-600 
        focus:ring-4 focus:outline-none font-medium rounded-lg text-sm
         px-5 py-2.5 text-center items-center
          dark:focus:ring-[#F7BE38]/50 mb-2"
      >
        <DownloadIcon />
        {status === "loading" ? "Preparing your PDF…" : "Download completed lease"}
      </button>
      <p className="text-sm text-gray-500 mt-3 max-w-md">Review the downloaded document carefully with every party before signing or sharing it.</p>
      <div aria-live="polite">
        {status === "success" && <p className="text-sm text-green-700 mt-3">Download complete.</p>}
        {status === "error" && <p className="text-sm text-red-700 mt-3">We couldn&apos;t prepare the PDF. Please check your connection and try again.</p>}
      </div>
    </div>
  );
}
