import NextButton from "../common/NextButton";
import BackButton from "../common/BackButton";
import { Name } from "../features/name";
import { RentalUnit } from "../features/rentalUnit";
import { ContactInfo } from "../features/contactInfo";
import { TermTenancy } from "../features/termTenancy";
import { UtilityInfo } from "../features/utilityInfo";
import { DepositInfo } from "../features/depositInfo";
import { Signature } from "../features/signature";
import { ThankYou } from "../features/thankYou";
import { useSelector } from "react-redux";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/400.css";
import "../index.css";

export default function App() {
  const currentPage = useSelector((state) => state.currentPage.value);

  const pages = {
    1: <Name />,
    2: <RentalUnit />,
    3: <ContactInfo />,
    4: <TermTenancy />,
    5: <DepositInfo />,
    6: <UtilityInfo />,
    7: <Signature />,
    8: <ThankYou />,
  };

  const renderPage = pages[currentPage] || null;

  return (
    <div
      className="  bg-[#F5F7FA] justify-items-center w-full p-5  md:px-20
    rounded-3xl	
    "
    >
      <h1 className="font-header font-black mb-8 mt-4 text-2xl md:text-3xl underline-offset-4 underline">
        Easy-Lease Ontario
      </h1>

      {renderPage}
      <div className="flex gap-8 w-full justify-between">
        {currentPage > 1 && currentPage < 8 ? <BackButton /> : ""}{" "}
        {currentPage < 8 ? <NextButton /> : ""}
      </div>
      {currentPage < 8 && (
        <h2 className="px-2.5 font-medium py-3 text-black-500 rounded-full border-black border-2 mt-12 mb-2 ">
          {currentPage} / 7
        </h2>
      )}
    </div>
  );
}
