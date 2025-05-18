import { useSelector, useDispatch } from "react-redux";
import { updateUtilityInfo } from "./utilityInfoSlice";
import FormHeader from "../../common/FormHeader";
import RadioButton from "../../common/RadioButton";
import InputField from "../../common/InputField";
export default function UtilityInfo() {
  const dispatch = useDispatch();
  const utilityInfo = useSelector((state) => state.utilityInfo);

  const handleUpdateUtilityInfo = (e) => {
    const { name, value } = e.target;
    dispatch(updateUtilityInfo({ name, value }));
  };

  return (
    <div className="w-full mb-6">
      <FormHeader
        subtitle="The following services are included in the lawful rent for the rental
          unit, as specified:"
      />
      <div className="px-2 mt-8">
        <div className="flex justify-between  mb-14 ">
          <h3 className="text-base ">Gas</h3>
          <div className="flex gap-8 ">
            <div className="flex flex-col gap-2 items-center">
              <label className="text-base">Yes </label>
              <RadioButton
                name="gas"
                value="yes"
                checked={utilityInfo.gas === "yes"}
                onChange={(e) => handleUpdateUtilityInfo(e)}
              />
            </div>

            <div className="flex flex-col gap-2 items-center">
              <label className="text-base">No </label>
              <RadioButton
                name="gas"
                value="no"
                checked={utilityInfo.gas === "no"}
                onChange={(e) => handleUpdateUtilityInfo(e)}
              />
            </div>
          </div>
        </div>

        <div className="flex text-base justify-between mb-14">
          <h3 className=" text-md">Air Conditioning</h3>

          <div className="flex gap-8 ">
            <div className="flex flex-col gap-2 items-center">
              <label className="text-base">Yes </label>
              <RadioButton
                name="ac"
                value="yes"
                checked={utilityInfo.ac === "yes"}
                onChange={(e) => handleUpdateUtilityInfo(e)}
              />
            </div>

            <div className="flex flex-col gap-2 items-center">
              <label className="text-base">No </label>
              <RadioButton
                name="ac"
                value="no"
                checked={utilityInfo.ac === "no"}
                onChange={(e) => handleUpdateUtilityInfo(e)}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between mb-14">
          <h3 className=" text-md">Additional storage</h3>

          <div className="flex gap-8 ">
            <div className="flex flex-col gap-2 items-center">
              <label className="text-base">Yes </label>
              <RadioButton
                name="addStore"
                value="yes"
                checked={utilityInfo.addStore === "yes"}
                onChange={(e) => handleUpdateUtilityInfo(e)}
              />
            </div>
            <div className="flex flex-col gap-2 items-center">
              <label className="text-base">No </label>
              <RadioButton
                name="addStore"
                value="no"
                checked={utilityInfo.addStore === "no"}
                onChange={(e) => handleUpdateUtilityInfo(e)}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between mb-14">
          <h3 className=" text-md">On-Site Laundry</h3>

          <div className="flex gap-8 ">
            <div className="flex flex-col gap-2 items-center">
              <label className="text-base">Yes </label>
              <RadioButton
                name="laundry"
                value="yes"
                checked={utilityInfo.laundry === "yes"}
                onChange={(e) => handleUpdateUtilityInfo(e)}
              />
            </div>
            <div className="flex flex-col gap-2 items-center">
              <label className="text-base">No </label>
              <RadioButton
                name="laundry"
                value="no"
                checked={utilityInfo.laundry === "no"}
                onChange={(e) => handleUpdateUtilityInfo(e)}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between mb-14">
          <h3 className=" text-md">Guest Parking</h3>
          <div className="flex gap-8 ">
            <div className="flex flex-col gap-2 items-center">
              <label className="text-base">Yes </label>
              <RadioButton
                name="guestPark"
                value="yes"
                checked={utilityInfo.guestPark === "yes"}
                onChange={(e) => handleUpdateUtilityInfo(e)}
              />
            </div>
            <div className="flex flex-col gap-2 items-center">
              <label className="text-base">No </label>
              <RadioButton
                name="guestPark"
                value="no"
                checked={utilityInfo.guestPark === "no"}
                onChange={(e) => handleUpdateUtilityInfo(e)}
              />
            </div>
          </div>
        </div>

        {/* <div className="flex justify-between mb-14">
            <h3 className=" text-md">Other</h3>
            <div className="flex gap-8 ">
              <div className="flex flex-col gap-2 items-center">
                <label  className="text-base">Yes </label>
                <InputField
                 RadioButton
                  type
                  value="yes"
                  checked={utilityInfo.otherUtil1 === "yes"}
                  onChange={e=>handleUpdateUtilityInfo(e)}
                                        />
              </div>
              <div className="flex flex-col gap-2 items-center">
                <label  className="text-base">No </label>
                <InputField
                 RadioButton
                  type
                  value="no"
                  checked={utilityInfo.otherUtil1 === "no"}
                  onChange={e=>handleUpdateUtilityInfo(e)}
                                        />
              </div>
            </div>
          </div> */}
        {utilityInfo.otherUtil1 === "yes" && (
          <input
            type="text"
            value={otherUtilText1}
            name="otherUtilText1"
            onChange={(e) => handleUpdateUtilityInfo(e)}
            className="w-full block border border-gray-300 text-gray-900 text-md rounded-lg p-2 my-5 focus:shadow-md"
          ></input>
        )}
      </div>
      <FormHeader subtitle="The following utilities are the responsibility of:" />

      <div className="flex justify-between mt-10 mb-14">
        <h3 className=" text-md">Electricity</h3>
        <div className="flex gap-6 ">
          <div className="flex flex-col gap-2 items-center">
            <label className="text-base">LandLord</label>
            <RadioButton
              name="electricity"
              value="landlord"
              checked={utilityInfo.electricity === "landlord"}
              onChange={(e) => handleUpdateUtilityInfo(e)}
            />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <label className="text-base">Tenant </label>
            <RadioButton
              name="electricity"
              type="radio"
              value="tenant"
              checked={utilityInfo.electricity === "tenant"}
              onChange={(e) => handleUpdateUtilityInfo(e)}
              className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between mb-14">
        <h3 className=" text-md">Heat</h3>
        <div className="flex gap-6 ">
          <div className="flex flex-col gap-2 items-center">
            <label className="text-base">LandLord </label>

            <RadioButton
              name="heat"
              type="radio"
              value="landlord"
              checked={utilityInfo.heat === "landlord"}
              onChange={(e) => handleUpdateUtilityInfo(e)}
              className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
            />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <label className="text-base">Tenant </label>
            <RadioButton
              name="heat"
              type="radio"
              value="tenant"
              checked={utilityInfo.heat === "tenant"}
              onChange={(e) => handleUpdateUtilityInfo(e)}
              className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between mb-14">
        <h3 className=" text-md">Water</h3>
        <div className="flex gap-6 ">
          <div className="flex flex-col gap-2 items-center">
            <label className="text-base">LandLord </label>

            <RadioButton
              name="water"
              type="radio"
              value="landlord"
              checked={utilityInfo.water === "landlord"}
              onChange={(e) => handleUpdateUtilityInfo(e)}
              className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
            />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <label className="text-base">Tenant </label>
            <RadioButton
              name="water"
              type="radio"
              value="tenant"
              checked={utilityInfo.water === "tenant"}
              onChange={(e) => handleUpdateUtilityInfo(e)}
              className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
            />
          </div>
        </div>
      </div>
      {/* <label  className="text-base" className="">
          If the tenant is responsible for any utilities, provide details of the
          arrangement, e.g. tenant sets up account with and pays the utility
          provider, tenant pays a portion of the utility costs (if necessary add
          additional pages):
        </label>
        <input
          type="text"
          value={tenantUtilDetails}
          name="tenantUtilDetails"
          onChange={e=>handleUpdateUtilityInfo(e)}
          className="w-full mt-4 inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
        ></input> */}
    </div>
  );
}
