import { AiOutlinePlusCircle, AiOutlineCloseCircle } from "react-icons/ai";
import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import FormHeader from "../../../common/FormHeader";
import { useDispatch, useSelector } from "react-redux";
import {
  updateTenantSignature,
  addTenantSignature,
  removeTenantSignature,
} from "./tenantSignatureSlice";
import InputField from "../../../common/InputField";

export default function TenantSignature() {
  const tenantSignature = useSelector((state) => state.tenantSignature);
  const dispatch = useDispatch();

  const tenantSignatureRefs = useRef([]);

  const handleAddTenantSignature = () => {
    dispatch(addTenantSignature());
  };

  const handleRemoveTenantSignature = (index) => {
    dispatch(removeTenantSignature(index));
  };
  const handleUpdateTenantSignature = (index, e) => {
    const newData = { [e.target.name]: e.target.value };
    dispatch(updateTenantSignature({ index, data: newData }));
  };

  const handleTenantEnd = (index) => {
    if (tenantSignatureRefs.current[index]) {
      const signatureDataURL = tenantSignatureRefs.current[index]
        .getTrimmedCanvas()
        .toDataURL("image/png");

      dispatch(
        updateTenantSignature({
          index,
          data: { tenantSign: signatureDataURL },
        })
      );
    } else {
      console.error(`Ref not found for index ${index}`);
    }
  };

  return (
    <div className="w-full ">
      <div className="mb-10">
        <FormHeader
          title=" Tenant(s) 
            Signature"
        />

        {tenantSignature.map((singleTenantSignature, index) => (
          <div key={index} className="flex flex-col items-center ">
            <InputField
              placeholder={`${index + 1}. Tenant's Legal Name`}
              name="tenantName"
              onChange={(e) => handleUpdateTenantSignature(index, e)}
              value={singleTenantSignature.tenantName}
            />
            <div className="overflow-hidden w-full  mb-8 flex flex-col items-start">
              <SignatureCanvas
                maxLength={80}
                penColor="black"
                canvasProps={{
                  className: "w-full mb-3.5   h-24 border-b-2 border-black ",
                }}
                ref={(ref) => (tenantSignatureRefs.current[index] = ref)}
                name="tenantSign"
                onEnd={() => handleTenantEnd(index)}
              />
              <label className="signature-label">X — Tenant signature</label>
            </div>
            <input
              name="tenantSignDate"
              type="date"
              className="date-input"
              onInput={(e) => handleUpdateTenantSignature(index, e)}
              value={singleTenantSignature.tenantSignDate}
            />

            <div className="signature-actions">
              {tenantSignature.length > 1 && (
                <button
                  className="inline-action inline-action-danger"
                  type="button"
                  onClick={() => handleRemoveTenantSignature(index)}
                >
                  <AiOutlineCloseCircle aria-hidden="true" /> Remove
                </button>
              )}

              {tenantSignature.length - 1 == index &&
                tenantSignature.length < 5 && (
                  <button
                    className="inline-action inline-action-add ml-auto"
                    type="button"
                    onClick={handleAddTenantSignature}
                  >
                    <AiOutlinePlusCircle aria-hidden="true" /> Add tenant
                  </button>
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
