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
        className="flex w-full text-lg mb-2 justify-center font-header
         "
      >
        Landlord Name(s)
      </h3>

      {landlordName.map((singleLandlordName, i) => (
        <div key={i} className="mb-5">
          <InputField
            placeholder={`${i + 1}. Landlord Full Name`}
            name="landlordName"
            type="text"
            onChange={(e) => handleLandlordNameChange(e, i)}
            value={singleLandlordName.landlordName}
          />

          <div className="flex mt-2">
            {landlordName.length > 1 && (
              <button
                className="inline-action inline-action-danger"
                type="button"
                onClick={() => handleRemoveLandlordName(i)}
              >
                <FaMinus aria-hidden="true" /> Remove
              </button>
            )}

            {landlordName.length - 1 == i && landlordName.length < 5 && (
              <button
                className="inline-action inline-action-add ml-auto"
                type="button"
                onClick={handleAddLandlordName}
              >
                <FaPlus aria-hidden="true" /> Add landlord
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
