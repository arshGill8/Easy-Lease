export default function FormButton({ page, handlePageNext, handleSubmit }) {
  return (
    <button
      className="font-bold	bg-green-500 w-1/2 p-1 rounded hover:bg-green-600 shadow-md text-white "
      onClick={page === 8 ? handleSubmit : handlePageNext}
    >
      {page === 7 ? "Complete" : "Next"}
    </button>
  );
}
