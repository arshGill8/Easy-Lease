import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import DownloadIcon from "../../common/DownloadIcon";

export default function ThankYou() {
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
    axios({
      url: "https://simple-lease-api.onrender.com/createForm",
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
        console.log(response);
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "output.pdf"); // or any other extension
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error("Error downloading the PDF:", error);
      });
  };

  return (
    <div className="text-center py-4 ">
      <div className="mb-4">
        <h2 className="lg:text-xl tracking-wide">
          Thank You <br /> Your lease was completed successfully!
        </h2>
      </div>
      <button
        onClick={downloadPDF}
        type="button"
        className="flex gap-3  text-white bg-green-500		 hover:bg-green-600 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2"
      >
        <DownloadIcon />
        Download Completed File
      </button>
    </div>
  );
}
