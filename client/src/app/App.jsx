import { useDispatch, useSelector } from "react-redux";
import SubmitButton from "../common/SubmitButton";
import { Name } from "../features/name";
import { RentalUnit } from "../features/rentalUnit";
import { ContactInfo } from "../features/contactInfo";
import { LeaseTermInfo } from "../features/leaseTermInfo";
import { UtilityInfo } from "../features/utilityInfo";
import { DepositInfo } from "../features/depositInfo";
import { Signature } from "../features/signature";
import { ThankYou } from "../features/thankYou";
import bg from "/office_bg.jpg";
import "./main.css";
import {
  pageIncrement,
  pageDecrement,
} from "../features/currentPage/currentPageSlice";

export default function App() {
  const currentPage = useSelector((state) => state.currentPage.value);

  const dispatch = useDispatch();

  const handlePageIncrement = () => {
    dispatch(pageIncrement());
  };

  const handlePageDecrement = () => {
    dispatch(pageDecrement());
  };

  const allPages = {
    1: <Name />,
    2: <RentalUnit />,
    3: <ContactInfo />,
    4: <LeaseTermInfo />,
    5: <DepositInfo />,
    6: <UtilityInfo />,
    7: <Signature />,
    8: <ThankYou />,
  };

  const pageToRender = allPages[currentPage] || allPages[1];

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-cover grid place-items-center h-screen"
    >
      <div
        className="grid justify-items-center  w-full lg:w-4/5	 py-6 px-7  shadow-lg    
    rounded-3xl	
    bg-white "
      >
        {pageToRender}

        {currentPage < 8 ? (
          <div className="w-full flex justify-center gap-3">
            {
              <button
                className=" font-bold w-1/2 bg-gray-200 hover:bg-gray-400 p-1 rounded hover: shadow-md"
                onClick={handlePageDecrement}
              >
                Go Back
              </button>
            }

            <SubmitButton
              page={currentPage}
              handlePageNext={handlePageIncrement}
            />
          </div>
        ) : (
          ""
        )}
        {/* <h2 className="p-3 rounded-full border-2 my-5 mb-4 ">{currentPage}/7</h2> */}
      </div>
    </div>
  );
}
