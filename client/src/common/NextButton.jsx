import { useDispatch, useSelector } from "react-redux";
import { pageIncrement } from "../features/currentPage";
import { MdOutlineNavigateNext } from "react-icons/md";

export default function NextButton() {
  const currentPage = useSelector((state) => state.currentPage.value);
  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(pageIncrement());
  };
  return (
    <button
      type="submit"
      className="button button-primary"
      onClick={handleNext}
    >
      {currentPage === 7 ? "Finish lease" : "Continue"}
      <MdOutlineNavigateNext className="text-2xl" />
    </button>
  );
}
