import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../../../common/InputField";

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
    <div className="w-full mb-16">
      <h3
        className="flex w-full text-lg  mb-2 justify-center mt-6 font-header
         "
      >
        Landlord's Legal Name (s)
      </h3>

      {landlordName.map((singleLandlordName, i) => (
        <div key={i} className="mb-5">
          <InputField
            placeholder={`${i + 1}. Landlord's Full Legal Name`}
            name="landlordName"
            type="text"
            onChange={(e) => handleLandlordNameChange(e, i)}
            value={singleLandlordName.landlordName}
          />

          <div className="flex mt-2">
            {landlordName.length > 1 && (
              <button
                className="w-1/2.5 py-1.5 px-2 md:w-1/5 flex gap-1 items-center justify-center text-sm	 text-white bg-red-500 font-thin rounded-sm hover:bg-red-600 shadow-md"
                type="button"
                onClick={() => handleRemoveLandlordName(i)}
              >
                Remove <FaMinus />
              </button>
            )}

            {landlordName.length - 1 == i && landlordName.length < 5 && (
              <button
                className="w-1/2.5 py-1.5 px-2 md:w-1/5 ml-auto flex gap-1 items-center justify-center text-sm text-white bg-green-600  font-thin rounded-sm hover:bg-green-600 shadow-md"
                type="button"
                onClick={handleAddLandlordName}
              >
                Add Landlord <FaPlus />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
