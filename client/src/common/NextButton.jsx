import { useDispatch, useSelector } from "react-redux";
import { pageIncrement } from "../features/currentPage";
import { MdOutlineNavigateNext } from "react-icons/md";

export default function NextButton() {
  const currentPage = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(pageIncrement());
  };
  return (
    <button
      type="submit"
      className="font-bold w-1/2  ml-auto only:pl-2 flex py-2.5 justify-center items-center  bg-[#43A047]  rounded-sm hover:bg-green-500 shadow-lg text-white"
      onClick={handleNext}
    >
      {currentPage === 7 ? "Submit" : "Next"}
      <MdOutlineNavigateNext className="text-2xl" />
    </button>
  );
}
