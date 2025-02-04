import { AiOutlinePlusCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  updateLandlordName,
  addLandlordName,
  removeLandlordName,
} from "./landlordNameSlice";

export default function landlordName() {
  const landlordName = useSelector((state) => state.landlordName);
  const dispatch = useDispatch();

  const handleLandlordNameChange = (e, index) => {
    const newData = { landlordName: e.target.value };
    dispatch(updateLandlordName({ index, data: newData }));
  };

  const handleAddLandlordName = () => {
    dispatch(addLandlordName());
  };

  const handleRemoveLandlordName = (index) => {
    dispatch(removeLandlordName(index));
  };

  return (
    <div className="w-full">
      <form className="my-3">
        <div className="mb-10">
          <h1 className="flex justify-center">Landlord's Legal Name(s)</h1>

          {landlordName.map((singleLandlordName, i) => (
            <div key={i}>
              <input
                placeholder="Landlord’s Legal Name"
                name="landlordName"
                type="text"
                onChange={(e) => handleLandlordNameChange(e, i)}
                value={singleLandlordName.landlordName}
                className="w-full mb-3.5 mt-8 inline border border-gray-300 text-gray-900 rounded py-2.5 px-1.5 focus:shadow-md lg:h-14"
              />

              <div className="flex md:mt-1">
                {landlordName.length > 1 && (
                  <button
                    className="w-1/2.5 py-1.5 px-2 md:w-1/5 flex gap-1 items-center justify-center font-medium	 text-white bg-red-500 rounded hover:bg-red-600 shadow-md"
                    type="button"
                    onClick={() => handleRemoveLandlordName(i)}
                  >
                    Remove <AiOutlineCloseCircle />
                  </button>
                )}

                {landlordName.length - 1 == i && landlordName.length < 5 && (
                  <button
                    className="w-1/2.5 py-1.5 px-2 md:w-1/5 ml-auto flex gap-1 items-center justify-center font-medium	 text-white bg-green-500   rounded hover:bg-green-600 shadow-md"
                    type="button"
                    onClick={handleAddLandlordName}
                  >
                    Landlord <AiOutlinePlusCircle />
                  </button>
                )}
                
              </div>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}
