import { AiOutlinePlusCircle, AiOutlineCloseCircle } from "react-icons/ai";
import React, { useRef, useEffect, useMemo } from "react";
import SignatureCanvas from "react-signature-canvas";

import { useDispatch, useSelector } from "react-redux";
import {
  updateTenantSignature,
  addTenantSignature,
  removeTenantSignature,
} from "./tenantSignatureSlice";

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
    <div className="w-full mb-6">
      <form className="my-8">
        <div className="mb-10">
          <h1 className="text-center flex justify-center ">
            Tenant(s) <br />
            Signature
          </h1>

          {tenantSignature.map((singleTenantSignature, index) => (
            <div key={index} className="mb-8">
              <input
                placeholder="Tenant's Legal Name"
                name="tenantName"
                type="text"
                className="w-full my-4 mt-8 inline border border-gray-300 text-gray-900  rounded-lg p-3 focus:shadow-md"
                onChange={(e) => handleUpdateTenantSignature(index, e)}
                value={singleTenantSignature.tenantName}
              />
              <div className="overflow-hidden border border-gray-300  rounded-lg my-4 flex flex-col items-center">
                <label className="bg-sky-400 flex overflow-hidden py-2 w-full justify-center">
                  Tenant signature
                </label>
                <SignatureCanvas
                  maxLength={80}
                  penColor="black"
                  canvasProps={{
                    className: "w-4/5 mb-3.5   h-24 border-b-2 border-black ",
                  }}
                  ref={(ref) => (tenantSignatureRefs.current[index] = ref)}
                  name="tenantSign"
                  onEnd={() => handleTenantEnd(index)}
                />
              </div>
              <input
                name="tenantSignDate"
                type="date"
                className="my-4 w-full mt-2 inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
                onChange={(e) => handleUpdateTenantSignature(index, e)}
                value={singleTenantSignature.tenantSignDate}
              />

              <div className="flex">
                {tenantSignature.length > 1 && (
                  <button
                    className="md:w-1/6 flex gap-1 items-center justify-center w-2/5 font-medium	 text-white bg-red-500   p-2 py-3 rounded hover:bg-red-600 shadow-md"
                    type="button"
                    onClick={() => handleRemoveTenantSignature(index)}
                  >
                    Remove <AiOutlineCloseCircle />
                  </button>
                )}

                {tenantSignature.length - 1 == index &&
                  tenantSignature.length < 5 && (
                    <button
                      className=" md:w-1/6 ml-auto flex gap-1 items-center justify-center w-2/5  font-medium	 text-white bg-green-500  p-2 py-3 rounded hover:bg-green-600 shadow-md"
                      type="button"
                      onClick={handleAddTenantSignature}
                    >
                      Tenant <AiOutlinePlusCircle />
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
