import { MdOutlineNavigateBefore } from "react-icons/md";
import { useDispatch } from "react-redux";
import { pageDecrement } from "../features/currentPage/currentPageSlice";

export default function BackButton() {
  const dispatch = useDispatch();

  const handlePageDecrement = () => {
    dispatch(pageDecrement());
  };

  return (
    <button
      className="font-bold pr-2 py-2.5 flex justify-center items-center  bg-[#1E88E5] border-black w-1/2 rounded hover:bg-slate-300 shadow-lg text-black"
      onClick={handlePageDecrement}
    >
      <MdOutlineNavigateBefore className="text-2xl" />
      Back
    </button>
  );
}
