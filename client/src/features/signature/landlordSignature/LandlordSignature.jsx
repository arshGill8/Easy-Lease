import { AiOutlinePlusCircle, AiOutlineCloseCircle } from "react-icons/ai";
import React, { useRef, useEffect, useMemo } from "react";
import SignatureCanvas from "react-signature-canvas";
import { useDispatch, useSelector } from "react-redux";
import {
  updateLandlordSignature,
  addLandlordSignature,
  removeLandlordSignature,
} from "./landlordSignatureSlice";
import FormHeader from "../../../common/FormHeader";
import InputField from "../../../common/InputField";

export default function LandlordSignature() {
  const landlordSignature = useSelector((state) => state.landlordSignature);
  const dispatch = useDispatch();

  const landSignatureRefs = useRef([]);

  const handleAddLandlordSignature = () => {
    dispatch(addLandlordSignature());
  };

  const handleRemoveLandlordSignature = (index) => {
    dispatch(removeLandlordSignature(index));
  };
  const handleUpdateLandlordSignature = (index, e) => {
    const newData = { [e.target.name]: e.target.value };
    dispatch(updateLandlordSignature({ index, data: newData }));
  };

  const handleLandlordEnd = (index) => {
    if (landSignatureRefs.current[index]) {
      const signatureDataURL = landSignatureRefs.current[index]
        .getTrimmedCanvas()
        .toDataURL("image/png");

      dispatch(
        updateLandlordSignature({
          index,
          data: { landlordSign: signatureDataURL },
        })
      );
    } else {
      console.error(`Ref not found for index ${index}`);
    }
  };

  return (
    <div className="w-full ">
      <div className="mb-14">
        <FormHeader title="  Landlord(s) Signature" />
        {landlordSignature.map((singleLandlordSignature, index) => (
          <div key={index} className="flex flex-col items-center ">
            <InputField
              placeholder={`${index + 1}. Landlord's Legal Name`}
              name="landlordName"
              onChange={(e) => handleUpdateLandlordSignature(index, e)}
              value={singleLandlordSignature.landlordName}
            />
            <div className="overflow-hidden w-full mb-8 flex flex-col items-start">
              <SignatureCanvas
                maxLength={80}
                penColor="black"
                canvasProps={{
                  className: "w-full mb-3.5 h-24 border-b-2 border-black ",
                }}
                ref={(ref) => (landSignatureRefs.current[index] = ref)}
                name="landlordSign"
                onEnd={() => handleLandlordEnd(index)}
              />
              <label className="w-full"> X Landlord Signature</label>
            </div>
            <input
              name="landlordSignDate"
              type="date"
              className="bg-transparent  md:text-xl w-4/5 mb-4  border border-black text-gray-900 rounded-sm p-2 focus:shadow-md "
              onChange={(e) => handleUpdateLandlordSignature(index, e)}
              value={singleLandlordSignature.landlordSignDate}
            />

            <div className="flex my-8 mb-14 gap-20">
              {landlordSignature.length > 1 && (
                <button
                  className="w-full flex gap-1 items-center justify-center  font-medium	 text-white bg-red-500   p-2 py-3 rounded hover:bg-red-600 shadow-md"
                  type="button"
                  onClick={() => handleRemoveLandlordSignature(index)}
                >
                  Remove <AiOutlineCloseCircle />
                </button>
              )}

              {landlordSignature.length - 1 == index &&
                landlordSignature.length < 5 && (
                  <button
                    className=" w-full ml-auto flex gap-1 items-center justify-center font-medium	 text-white bg-green-500  p-2 py-3 rounded hover:bg-green-600 shadow-md"
                    type="button"
                    onClick={handleAddLandlordSignature}
                  >
                    Landlord <AiOutlinePlusCircle />
                  </button>
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
