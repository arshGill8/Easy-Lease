import { AiOutlinePlusCircle, AiOutlineCloseCircle } from "react-icons/ai";
import React, { useRef } from "react";
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
              <label className="signature-label">X — Landlord signature</label>
            </div>
            <input
              name="landlordSignDate"
              type="date"
              className="date-input"
              onInput={(e) => handleUpdateLandlordSignature(index, e)}
              value={singleLandlordSignature.landlordSignDate}
            />

            <div className="signature-actions">
              {landlordSignature.length > 1 && (
                <button
                  className="inline-action inline-action-danger"
                  type="button"
                  onClick={() => handleRemoveLandlordSignature(index)}
                >
                  <AiOutlineCloseCircle aria-hidden="true" /> Remove
                </button>
              )}

              {landlordSignature.length - 1 == index &&
                landlordSignature.length < 5 && (
                  <button
                    className="inline-action inline-action-add ml-auto"
                    type="button"
                    onClick={handleAddLandlordSignature}
                  >
                    <AiOutlinePlusCircle aria-hidden="true" /> Add landlord
                  </button>
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
