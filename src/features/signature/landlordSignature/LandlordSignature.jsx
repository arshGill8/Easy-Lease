import { AiOutlinePlusCircle, AiOutlineCloseCircle } from "react-icons/ai";
import React, { useRef, useEffect, useMemo } from "react";
import SignatureCanvas from "react-signature-canvas";
import { useDispatch, useSelector } from "react-redux";
import {
  updateLandlordSignature,
  addLandlordSignature,
  removeLandlordSignature,
} from "./landlordSignatureSlice";

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
    console.log(e);
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
    <div className="w-full mb-6">
      <form className="my-8">
        <div className="mb-24">
          <h1 className="text-center flex justify-center ">
            Landlord(s) Signature
          </h1>
          {landlordSignature.map((singleLandlordSignature, index) => (
            <div key={index} className="mb-8">
              <input
                placeholder="Landlord's Legal Name"
                name="landlordName"
                type="text"
                className="w-full my-4 mt-8 inline border border-gray-300 text-gray-900  rounded-lg p-3 focus:shadow-md"
                onChange={(e) => handleUpdateLandlordSignature(index, e)}
                value={singleLandlordSignature.landlordName}
              />
              <div className="overflow-hidden border border-gray-300  rounded-lg my-4 flex flex-col items-center">
                <label className="bg-sky-400 flex overflow-hidden py-2 w-full justify-center">
                  Landlord signature
                </label>
                <SignatureCanvas
                  maxLength={80}
                  penColor="black"
                  canvasProps={{
                    className: "w-4/5 mb-3.5 h-24 border-b-2 border-black ",
                  }}
                  ref={(ref) => (landSignatureRefs.current[index] = ref)}
                  name="landlordSign"
                  onEnd={() => handleLandlordEnd(index)}
                />
              </div>
              <input
                name="landlordSignDate"
                type="date"
                className="my-4 w-full mt-2 inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
                onChange={(e) => handleUpdateLandlordSignature(index, e)}
                value={singleLandlordSignature.landlordSignDate}
              />

              <div className="flex">
                {landlordSignature.length > 1 && (
                  <button
                    className="md:w-1/6 flex gap-1 items-center justify-center w-2/5 font-medium	 text-white bg-red-500   p-2 py-3 rounded hover:bg-red-600 shadow-md"
                    type="button"
                    onClick={() => handleRemoveLandlordSignature(index)}
                  >
                    Remove <AiOutlineCloseCircle />
                  </button>
                )}

                {landlordSignature.length - 1 == index &&
                  landlordSignature.length < 5 && (
                    <button
                      className=" md:w-1/6 ml-auto flex gap-1 items-center justify-center w-2/5  font-medium	 text-white bg-green-500  p-2 py-3 rounded hover:bg-green-600 shadow-md"
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
      </form>
    </div>
  );
}
