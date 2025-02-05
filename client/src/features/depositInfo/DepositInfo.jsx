import { useSelector, useDispatch } from "react-redux";
import { updateDepositInfo } from "./depositInfoSlice";

export default function DepositInfo() {
  const dispatch = useDispatch();
  const depositInfo = useSelector((state) => state.depositInfo);

  const handleUpdateDepositInfo = (e) => {
    const { name, value } = e.target;
    dispatch(updateDepositInfo({ name, value }));
  };

  return (
    <div className="w-full">
      <form className="my-4 mx-1.5">
        <div className="flex justify-between mb-6">
          <h2 className="text-lg">Rent Discount?</h2>
          <div className="flex gap-8">
            <div className="flex flex-col gap-2 ">
              <label>Yes</label>
              {/* <label>The lawful rent will be discounted as follows: </label> */}
              <input
                name="rentDiscount"
                type="radio"
                value="yes"
                checked={depositInfo.rentDiscount === "yes"}
                onChange={(e) => handleUpdateDepositInfo(e)}
                className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>No</label>
              <input
                name="rentDiscount"
                type="radio"
                value="no"
                checked={depositInfo.rentDiscount === "no"}
                onChange={(e) => handleUpdateDepositInfo(e)}
                className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
              />
            </div>
          </div>
        </div>
        {depositInfo.rentDiscount === "yes" && (
          <div className="flex text-center flex-col mt-5 px-2">
            <label className="block ">
              Provide description of rent discount:
            </label>
            <input
              type="text"
              value={depositInfo.rentDiscountDesc}
              onChange={(e) => handleUpdateDepositInfo(e)}
              name="rentDiscountDesc"
              className="w-full mt-2 block border border-gray-300 text-gray-900 text-md rounded-lg p-2 focus:shadow-md"
            />
          </div>
        )}
        <div className="flex justify-between mb-6">
          <h2 className="text-lg  "> Rent Deposit?</h2>
          <div className="flex  gap-8 ">
            <div className="flex flex-col gap-2">
              <label>Yes</label>
              <input
                name="rentDeposit"
                type="radio"
                value="yes"
                checked={depositInfo.rentDeposit === "yes"}
                onChange={(e) => handleUpdateDepositInfo(e)}
                className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>No</label>
              <input
                name="rentDeposit"
                type="radio"
                value="no"
                checked={depositInfo.rentDeposit === "no"}
                onChange={(e) => handleUpdateDepositInfo(e)}
                className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
              />
            </div>
          </div>
        </div>
        {depositInfo.rentDeposit === "yes" && (
          <>
            <h2 className=" flex justify-center mt-5">Rent deposit amount</h2>
            <input
              value={depositAmount}
              onChange={(e) => handleUpdateDepositInfo(e)}
              type="text"
              name="depositAmount"
              className="w-full mt-2 inline border border-gray-300 text-gray-900 text-md rounded-lg p-2 focus:shadow-md"
              placeholder="$1000"
            />
            <p className="mt-1 text-sm text-center">
              {" "}
              *This can only be applied to the rent for the last rental period
              of the tenancy.
            </p>
          </>
        )}
        <div className="flex justify-between mb-6">
          <h2 className=" text-lg ">Key Deposit?</h2>
          <div className="flex  gap-8 ">
            <div className="flex flex-col gap-2">
              <label>Yes</label>

              <input
                name="keyDeposit"
                type="radio"
                value="yes"
                checked={depositInfo.keyDeposit === "yes"}
                onChange={(e) => handleUpdateDepositInfo(e)}
                className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>No</label>
              <input
                name="keyDeposit"
                type="radio"
                value="no"
                checked={depositInfo.keyDeposit === "no"}
                onChange={(e) => handleUpdateDepositInfo(e)}
                className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
              />
            </div>
          </div>
        </div>
        {depositInfo.keyDeposit === "yes" && (
          <>
            {" "}
            <h2 className=" flex justify-center mt-5">
              Refundable key deposit amount
            </h2>
            <input
              value={keyDepAmount}
              onChange={(e) => handleUpdateDepositInfo(e)}
              type="text"
              name="keyDepAmount"
              className="w-full mt-2 inline border border-gray-300 text-gray-900 text-md rounded-lg p-2 focus:shadow-md"
              placeholder="$75"
            />
            <h2 className=" flex justify-center mt-4">Provide description</h2>
            <input
              value={keyDepositDesc}
              type="text"
              onChange={(e) => handleUpdateDepositInfo(e)}
              className="w-full mt-2 inline border border-gray-300 text-gray-900 text-md rounded-lg p-2 focus:shadow-md"
              placeholder="ex. number of keys, access cards and remote
              entry devices"
              name="keyDepositDesc"
            ></input>
          </>
        )}
        <div className="flex justify-between mb-6">
          <h2 className=" text-lg   ">Smoking Allowed?</h2>
          <div className="flex   gap-8 ">
            <div className="flex flex-col gap-2">
              <label>Yes</label>
              <input
                name="smoking"
                type="radio"
                value="yes"
                checked={depositInfo.smoking === "yes"}
                onChange={(e) => handleUpdateDepositInfo(e)}
                className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>No</label>
              <input
                name="smoking"
                type="radio"
                value="no"
                checked={depositInfo.smoking === "no"}
                onChange={(e) => handleUpdateDepositInfo(e)}
                className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
              />
            </div>
          </div>

          {depositInfo.smoking === "yes" && (
            <div>
              <h2 className=" flex justify-center mt-5">
                Provide description of smoking rules{" "}
              </h2>
              <input
                name="smokingRules"
                value={depositInfo.smokingRules}
                onChange={(e) => handleUpdateDepositInfo(e)}
                className="w-full mt-2 inline border border-gray-300 text-gray-900 text-md rounded-lg p-2 focus:shadow-md"
              ></input>
            </div>
          )}
        </div>
        <div className="flex justify-between mb-6">
          <h2 className=" text-lg  ">Tenant's Insurance Required?</h2>
          <div className="flex  gap-8">
            <div className="flex flex-col gap-2">
              <label>Yes </label>
              <input
                name="tenantInsurance"
                type="radio"
                value="yes"
                checked={depositInfo.tenantInsurance === "yes"}
                onChange={(e) => handleUpdateDepositInfo(e)}
                className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>No</label>
              <input
                name="tenantInsurance"
                type="radio"
                value="no"
                checked={depositInfo.tenantInsurance === "no"}
                onChange={(e) => handleUpdateDepositInfo(e)}
                className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
              />
            </div>
          </div>{" "}
        </div>
        <div className="flex justify-between mb-5">
          <h2 className=" text-lg  "> Additional Terms?</h2>
          <div className="flex  gap-8 ">
            <div className="flex flex-col gap-2">
              <label>Yes</label>
              <input
                name="addTerm"
                type="radio"
                value="yes"
                checked={depositInfo.addTerm === "yes"}
                onChange={(e) => handleUpdateDepositInfo(e)}
                className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>No</label>
              <input
                name="addTerm"
                type="radio"
                value="no"
                checked={depositInfo.addTerm === "no"}
                onChange={(e) => handleUpdateDepositInfo(e)}
                className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
              />
            </div>
          </div>
        </div>
        {depositInfo.addTerm === "yes" && (
          <p className="my-2 text-sm text-center mb-6">
            *This tenancy agreement includes an attachment with additional terms
            that the landlord and tenant agreed to.
          </p>
        )}
      </form>
    </div>
  );
}
