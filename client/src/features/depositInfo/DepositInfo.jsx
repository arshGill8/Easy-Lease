import { useSelector, useDispatch } from "react-redux";
import { updateDepositInfo } from "./depositInfoSlice";
import RadioButton from "../../common/RadioButton";
import InputField from "../../common/InputField";
import FormHeader from "../../common/FormHeader";

export default function DepositInfo() {
  const dispatch = useDispatch();
  const depositInfo = useSelector((state) => state.depositInfo);

  const handleUpdateDepositInfo = (e) => {
    const { name, value } = e.target;
    dispatch(updateDepositInfo({ name, value }));
  };

  return (
    <div className="w-full mb-10">
      <FormHeader title="Discounts/Deposits and More" />
      <div className="flex justify-between mb-6">
        <h2 className="text-lg">Rent Discount?</h2>
        <div className="flex gap-8">
          <div className="flex flex-col items-center gap-2 ">
            <label>Yes</label>
            {/* <label>The lawful rent will be discounted as follows: </label> */}
            <RadioButton
              name="rentDiscount"
              value="yes"
              checked={depositInfo.rentDiscount === "yes"}
              onChange={(e) => handleUpdateDepositInfo(e)}
            />
          </div>

          <div className="flex flex-col items-center gap-2">
            <label>No</label>
            <RadioButton
              name="rentDiscount"
              value="no"
              checked={depositInfo.rentDiscount === "no"}
              onChange={(e) => handleUpdateDepositInfo(e)}
            />
          </div>
        </div>
      </div>

      {depositInfo.rentDiscount === "yes" && (
        <div className="flex text-center flex-col mt-5 px-2">
          <label className="block ">
            Provide description of rent discount:
          </label>
          <InputField
            value={depositInfo.rentDiscountDesc}
            name="rentDiscountDesc"
            onChange={(e) => handleUpdateDepositInfo(e)}
          />
        </div>
      )}
      <div className="flex justify-between mt-6 mb-6">
        <h2 className="text-lg  "> Rent Deposit?</h2>
        <div className="flex  gap-8 ">
          <div className="flex flex-col gap-2 items-center">
            <label>Yes</label>
            <RadioButton
              name="rentDeposit"
              value="yes"
              checked={depositInfo.rentDeposit === "yes"}
              onChange={(e) => handleUpdateDepositInfo(e)}
            />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <label>No</label>
            <RadioButton
              name="rentDeposit"
              value="no"
              checked={depositInfo.rentDeposit === "no"}
              onChange={(e) => handleUpdateDepositInfo(e)}
            />
          </div>
        </div>
      </div>
      {depositInfo.rentDeposit === "yes" && (
        <>
          <h2 className=" flex justify-center mt-5">Rent deposit amount</h2>
          <InputField
            value={depositInfo.depositAmount}
            onChange={(e) => handleUpdateDepositInfo(e)}
            name="depositAmount"
          />
          <p className="mt-1 text-sm text-center">
            {" "}
            *This can only be applied to the rent for the last rental period of
            the tenancy.
          </p>
        </>
      )}
      <div className="flex justify-between mb-6">
        <h2 className=" text-lg ">Key Deposit?</h2>
        <div className="flex  gap-8 ">
          <div className="flex flex-col gap-2 items-center">
            <label>Yes</label>

            <RadioButton
              name="keyDeposit"
              value="yes"
              checked={depositInfo.keyDeposit === "yes"}
              onChange={(e) => handleUpdateDepositInfo(e)}
            />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <label>No</label>
            <RadioButton
              name="keyDeposit"
              value="no"
              checked={depositInfo.keyDeposit === "no"}
              onChange={(e) => handleUpdateDepositInfo(e)}
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
          <InputField
            value={depositInfo.keyDepAmount}
            onChange={(e) => handleUpdateDepositInfo(e)}
            name="keyDepAmount"
          />
          <h2 className=" flex justify-center mt-4">Provide description</h2>
          <InputField
            value={DepositInfo.keyDepositDesc}
            onChange={(e) => handleUpdateDepositInfo(e)}
            placeholder="ex. number of keys, access cards and remote
              entry devices"
            name="keyDepositDesc"
          />
        </>
      )}
      <div className="flex justify-between mb-6">
        <h2 className=" text-lg   ">Smoking Allowed?</h2>
        <div className="flex   gap-8 ">
          <div className="flex flex-col gap-2 items-center">
            <label>Yes</label>
            <RadioButton
              name="smoking"
              value="yes"
              checked={depositInfo.smoking === "yes"}
              onChange={(e) => handleUpdateDepositInfo(e)}
            />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <label>No</label>
            <RadioButton
              name="smoking"
              value="no"
              checked={depositInfo.smoking === "no"}
              onChange={(e) => handleUpdateDepositInfo(e)}
            />
          </div>
        </div>

        {depositInfo.smoking === "yes" && (
          <div>
            <h2 className=" flex justify-center text-center mt-5">
              Provide description of smoking rules{" "}
            </h2>
            <InputField
              placeholder={"Outdoors only"}
              name="smokingRules"
              value={depositInfo.smokingRules}
              onChange={(e) => handleUpdateDepositInfo(e)}
            />
          </div>
        )}
      </div>
      <div className="flex justify-between mb-6">
        <h2 className=" text-lg  ">Tenant's Insurance Required?</h2>
        <div className="flex  gap-8">
          <div className="flex flex-col gap-2 items-center">
            <label>Yes </label>
            <RadioButton
              name="tenantInsurance"
              value="yes"
              checked={depositInfo.tenantInsurance === "yes"}
              onChange={(e) => handleUpdateDepositInfo(e)}
            />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <label>No</label>
            <RadioButton
              name="tenantInsurance"
              value="no"
              checked={depositInfo.tenantInsurance === "no"}
              onChange={(e) => handleUpdateDepositInfo(e)}
            />
          </div>
        </div>{" "}
      </div>
      <div className="flex justify-between mb-5">
        <h2 className=" text-lg  "> Additional Terms?</h2>
        <div className="flex  gap-8 ">
          <div className="flex flex-col gap-2 items-center">
            <label>Yes</label>
            <RadioButton
              name="addTerm"
              value="yes"
              checked={depositInfo.addTerm === "yes"}
              onChange={(e) => handleUpdateDepositInfo(e)}
            />
          </div>

          <div className="flex flex-col gap-2 items-center">
            <label>No</label>
            <RadioButton
              name="addTerm"
              value="no"
              checked={depositInfo.addTerm === "no"}
              onChange={(e) => handleUpdateDepositInfo(e)}
            />
          </div>
        </div>
      </div>
      {depositInfo.addTerm === "yes" && (
        <p className="my-2 text-base mt-6 text-center mb-6">
          *This tenancy agreement includes an attachment with additional terms
          that the landlord and tenant agreed to.
        </p>
      )}
    </div>
  );
}
