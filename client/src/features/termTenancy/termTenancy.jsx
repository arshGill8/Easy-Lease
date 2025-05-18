import { useSelector, useDispatch } from "react-redux";
import { updateTermTenancy } from "./termTenancySlice";
import InputField from "../../common/InputField";
import RadioButton from "../../common/RadioButton";
import FormHeader from "../../common/FormHeader";

export default function TermTenancy() {
  const dispatch = useDispatch();
  const termTenancy = useSelector((state) => state.termTenancy);

  const handleUpdateTermTenancy = (e) => {
    const { name, value } = e.target;
    dispatch(updateTermTenancy({ name, value }));
  };

  return (
    <div className="w-full mb-4 px-1">
      <FormHeader
        title="        Term of Tenancy Agreement
"
      />

      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline   mb-6">
        <label className=" text-lg mb-4 text-center">
          This tenancy starts on:
        </label>
        <input
          name="startDate"
          type="date"
          onChange={(e) => handleUpdateTermTenancy(e)}
          value={termTenancy.startDate}
          className="bg-transparent md:text-xl md:w-1/2 inline border border-black text-gray-900 rounded-sm p-2 focus:shadow-md "
        />
      </div>

      <div className="border rounded-sm py-4 px-2 border-black">
        <label className="font-header block mb-8 text-lg text-center text-gray-900 ">
          This tenancy agreement is for: (select an option below and fill in
          details as needed)
        </label>
        <div className="md:mx-16">
          <div className="flex mb-5    justify-between  ">
            <label className="">Fixed length</label>
            <RadioButton
              name="tenancyType"
              value="fixed"
              checked={termTenancy.tenancyType === "fixed"}
              onChange={(e) => handleUpdateTermTenancy(e)}
            />
          </div>

          {termTenancy.tenancyType === "fixed" && (
            <div className="mb-5 md:flex-row md:justify-between  flex gap-1 my-8 ">
              <label className="">End Date:</label>
              <input
                name="fixedTenDate"
                type="date"
                onChange={(e) => handleUpdateTermTenancy(e)}
                value={termTenancy.fixedTenDate}
                className="bg-transparent md:text-xl md:w-1/2 inline border border-black text-gray-900 rounded-sm p-2 focus:shadow-md"
              />
            </div>
          )}

          <div className="flex mb-5    justify-between ">
            <label className="">Monthly Tenancy</label>

            <RadioButton
              name="tenancyType"
              value="monthly"
              checked={termTenancy.tenancyType === "monthly"}
              onChange={(e) => handleUpdateTermTenancy(e)}
            />
          </div>

          <div className="flex mb-3   justify-between  ">
            <label className="">
              Other (such as daily,
              <br /> weekly, please specify):
            </label>

            <RadioButton
              name="tenancyType"
              value="other"
              checked={termTenancy.tenancyType === "other"}
              onChange={(e) => handleUpdateTermTenancy(e)}
            />
          </div>

          {termTenancy.tenancyType === "other" && (
            <div className="w-full md:w-4/5 mx-auto">
              <InputField
                type="text"
                name="otherTenDetails"
                placeholder="Weekly, Bi-Weekly"
                value={termTenancy.otherTenDetails}
                onChange={(e) => (e) => handleUpdateTermTenancy(e)}
              />
            </div>
          )}
        </div>
      </div>
      <h1 className="text-center text-xl font-header underline underline-offset-2 my-6">
        Rent
      </h1>

      <div className="border rounded-sm py-4 px-4 border-black text-center ">
        <p className=" font-header text-lg mb-2 w-full">
          Rent is to be paid on the:
        </p>

        <div className=" mb-4 md:w-4/5 mx-auto">
          <InputField
            placeholder="(e.g., first) day of (select one)"
            type="text"
            value={termTenancy.rentDay}
            name="rentDay"
            onChange={(e) => (e) => handleUpdateTermTenancy(e)}
          />
        </div>

        <div className="flex justify-between mb-8 md:mx-16">
          <label className="">Each Month</label>
          <RadioButton
            type="radio"
            name="rentType"
            value="month"
            checked={termTenancy.rentType === "month"}
            onChange={(e) => handleUpdateTermTenancy(e)}
          />
        </div>

        <div className="flex justify-between md:mx-16  ">
          <label className="">Other (e.g., Weekly)</label>
          <RadioButton
            type="radio"
            name="rentType"
            value="other"
            checked={termTenancy.rentType === "other"}
            onChange={(e) => handleUpdateTermTenancy(e)}
          />
        </div>

        {termTenancy.rentType === "other" && (
          <div className="mx-auto md:w-4/5 mb-1">
            <InputField
              type="text"
              value={termTenancy.otherRentDetails}
              placeholder="Weekly"
              name="otherRentDetails"
              onChange={(e) => (e) => handleUpdateTermTenancy(e)(e)}
            />
          </div>
        )}
      </div>

      <div className="border border-black rounded my-8 py-4 px-2.5">
        {" "}
        <p className="text-center text-lg font-header  mb-5">
          The tenant will pay the following rent:
        </p>
        <div className="mb-5">
          <label className="mx-1">Base rent for the rental unit</label>
          <InputField
            value={termTenancy.baseRent}
            name="baseRent"
            type="text"
            onChange={(e) => handleUpdateTermTenancy(e)}
            placeholder="$1800"
          />
        </div>
        <div className="mb-5">
          <label className=" mx-1">Parking (if applicable)</label>
          <InputField
            value={termTenancy.parkingRent}
            name="parkingRent"
            type="text"
            onChange={(e) => handleUpdateTermTenancy(e)}
          />
        </div>
        {/* <div className="mb-5">
            <label className="mx-0">
              Other services and utilities (specify if applicable):
            </label>
            <input
              value={termTenancy.otherUtil1}
              name="otherUtil1"
              type="text"
              onChange={e=>handleUpdateTermTenancy(e)}
            ></input>
          </div> */}
        <div className="mb-5">
          <label className="">Total Rent (Lawful Rent)</label>
          <InputField
            value={termTenancy.totalRent}
            name="totalRent"
            type="text"
            onChange={(e) => handleUpdateTermTenancy(e)}
          />
        </div>
        <div className="mb-5">
          {" "}
          <label className="">Rent is payable to:</label>
          <InputField
            value={termTenancy.payTo}
            name="payTo"
            type="text"
            onChange={(e) => handleUpdateTermTenancy(e)}
          />
        </div>
        <div className="">
          {" "}
          <label className="">
            Rent will be paid using the following methods:
          </label>
          <InputField
            value={termTenancy.payMethod}
            name="payMethod"
            type="text"
            onChange={(e) => handleUpdateTermTenancy(e)}
          />
        </div>
      </div>

      <div>
        <div className="border border-black py-4 pb-8 px-2.5 my-8 rounded">
          <p className=" text-center text-lg mb-4">
            Is the first rental period a partial period?
          </p>

          <div className="flex gap-6 justify-center">
            <div className="flex gap-2">
              <label>Yes</label>
              <RadioButton
                value="yes"
                name="partPeriod"
                onChange={(e) => handleUpdateTermTenancy(e)}
                checked={termTenancy.partPeriod === "yes"}
              />
            </div>

            <div className="flex gap-2">
              <label>No</label>
              <RadioButton
                value="no"
                name="partPeriod"
                onChange={(e) => handleUpdateTermTenancy(e)}
                checked={termTenancy.partPeriod === "no"}
              />
            </div>
          </div>
          {termTenancy.partPeriod === "yes" && (
            <div className="text-center mt-5  ">
              <label className="">Tenant will pay a partial rent of:</label>
              <div className="md:w-4/5 mx-auto mb-6">
                <InputField
                  value={termTenancy.partRent}
                  placeholder="$500"
                  name="partRent"
                  onChange={(e) => handleUpdateTermTenancy(e)}
                />
              </div>
              <div className="md:px-20 flex flex-col gap-6">
                <div className="md:flex md:justify-between">
                  {" "}
                  <span className="block mb-4 mt-2">On</span>
                  <input
                    type="date"
                    value={termTenancy.partDate}
                    name="partDate"
                    onChange={(e) => handleUpdateTermTenancy(e)}
                    className="bg-transparent md:text-xl inline border border-black text-gray-900 rounded-sm p-2 focus:shadow-md"
                  ></input>
                </div>
                <div className="md:flex md:justify-between">
                  <span className="block my-7">
                    This partial rent covers the rental of the unit from:{" "}
                  </span>
                  <input
                    type="date"
                    value={termTenancy.coverDateFrom}
                    name="coverDateFrom"
                    onChange={(e) => handleUpdateTermTenancy(e)}
                    className="bg-transparent md:text-xl  inline border border-black text-gray-900 rounded-sm p-2 focus:shadow-md"
                  ></input>
                </div>
                <div className="md:flex md:justify-between">
                  <span className="block my-6">To</span>
                  <input
                    onChange={(e) => handleUpdateTermTenancy(e)}
                    type="date"
                    value={termTenancy.coverDateTo}
                    name="coverDateTo"
                    className="bg-transparent md:text-xl inline border border-black text-gray-900 rounded-sm p-2 focus:shadow-md"
                  ></input>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="border border-black p-2 flex flex-col rounded px-2.5 py-4 mb-8 text-center ">
        <div className="md:w-4/5 mx-auto mt-2">
          <label className="">
            If the tenant’s cheque is returned because of non-sufficient funds
            (NSF), the tenant will have to pay the landlord’s administration
            charge of
          </label>
          <InputField
            type="text"
            value={termTenancy.nsfCharge}
            name="nsfCharge"
            onChange={(e) => handleUpdateTermTenancy(e)}
          />
          <span className="my-2 block">
            * Plus any NSF charges made by the landlord's bank.
          </span>
        </div>
      </div>
    </div>
  );
}
