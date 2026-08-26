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
      type="button"
      className="button button-secondary"
      onClick={handlePageDecrement}
    >
      <MdOutlineNavigateBefore className="text-2xl" />
      Back
    </button>
  );
}
