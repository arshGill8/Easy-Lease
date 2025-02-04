import { useSelector, useDispatch } from "react-redux";
import { updateUtilityInfo } from "./utilityInfoSlice";

export default function UtilityInfo() {
  const dispatch = useDispatch();
  const utilityInfo = useSelector((state) => state.utilityInfo);

  const handleUpdateUtilityInfo = (e) => {
    const { name, value } = e.target;
    dispatch(updateUtilityInfo({ name, value }));
  };

  return (
    <div className="w-full mb-6">
      <form className="my-4">
        <h1 className="py-4 text-center text-lg flex justify-center mb-4">
          The following services are included in the lawful rent for the rental
          unit, as specified:
        </h1>
        <div className="px-2">
          <div className="flex justify-between  mb-4 ">
            <h3 className="">Gas</h3>
            <div className="flex gap-8 ">
              <div className="flex flex-col gap-2">
                <label>Yes </label>
                <input
                  name="gas"
                  type="radio"
                  value="yes"
                  checked={utilityInfo.gas === "yes"}
                  onChange={(e) => handleUpdateUtilityInfo(e)}
                  className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label>No </label>
                <input
                  name="gas"
                  type="radio"
                  value="no"
                  checked={utilityInfo.gas === "no"}
                  onChange={(e) => handleUpdateUtilityInfo(e)}
                  className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between mb-4">
            <h3>Air Conditioning</h3>

            <div className="flex gap-8 ">
              <div className="flex flex-col gap-2">
                <label>Yes </label>
                <input
                  name="ac"
                  type="radio"
                  value="yes"
                  checked={utilityInfo.ac === "yes"}
                  onChange={(e) => handleUpdateUtilityInfo(e)}
                  className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label>No </label>
                <input
                  name="ac"
                  type="radio"
                  value="no"
                  checked={utilityInfo.ac === "no"}
                  onChange={(e) => handleUpdateUtilityInfo(e)}
                  className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between mb-4">
            <h3>Additional storage</h3>

            <div className="flex gap-8 ">
              <div className="flex flex-col gap-2">
                <label>Yes </label>
                <input
                  name="addStore"
                  type="radio"
                  value="yes"
                  checked={utilityInfo.addStore === "yes"}
                  onChange={(e) => handleUpdateUtilityInfo(e)}
                  className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>No </label>
                <input
                  name="addStore"
                  type="radio"
                  value="no"
                  checked={utilityInfo.addStore === "no"}
                  onChange={(e) => handleUpdateUtilityInfo(e)}
                  className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between mb-4">
            <h3>On-Site Laundry</h3>

            <div className="flex gap-8 ">
              <div className="flex flex-col gap-2">
                <label>Yes </label>
                <input
                  name="laundry"
                  type="radio"
                  value="yes"
                  checked={utilityInfo.laundry === "yes"}
                  onChange={(e) => handleUpdateUtilityInfo(e)}
                  className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>No </label>
                <input
                  name="laundry"
                  type="radio"
                  value="no"
                  checked={utilityInfo.laundry === "no"}
                  onChange={(e) => handleUpdateUtilityInfo(e)}
                  className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between mb-4">
            <h3>Guest Parking</h3>
            <div className="flex gap-8 ">
              <div className="flex flex-col gap-2">
                <label>Yes </label>
                <input
                  name="guestPark"
                  type="radio"
                  value="yes"
                  checked={utilityInfo.guestPark === "yes"}
                  onChange={(e) => handleUpdateUtilityInfo(e)}
                  className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>No </label>
                <input
                  name="guestPark"
                  type="radio"
                  value="no"
                  checked={utilityInfo.guestPark === "no"}
                  onChange={(e) => handleUpdateUtilityInfo(e)}
                  className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
                />
              </div>
            </div>
          </div>

          {/* <div className="flex justify-between mb-4">
            <h3>Other</h3>
            <div className="flex gap-8 ">
              <div className="flex flex-col gap-2">
                <label>Yes </label>
                <input
                  name="otherUtil1"
                  type="radio"
                  value="yes"
                  checked={utilityInfo.otherUtil1 === "yes"}
                  onChange={e=>handleUpdateUtilityInfo(e)}
                  className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>No </label>
                <input
                  name="otherUtil1"
                  type="radio"
                  value="no"
                  checked={utilityInfo.otherUtil1 === "no"}
                  onChange={e=>handleUpdateUtilityInfo(e)}
                  className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
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
        <h1 className="py-4 text-center text-lg flex justify-center mb-4 mt-8">
          The following utilities are the responsibility of:{" "}
        </h1>

        <div className="flex justify-between mb-4">
          <h3>Electricity</h3>
          <div className="flex gap-6 ">
            <div className="flex flex-col gap-2">
              <label>LandLord</label>
              <input
                name="electricity"
                type="radio"
                value="landlord"
                checked={utilityInfo.electricity === "landlord"}
                onChange={(e) => handleUpdateUtilityInfo(e)}
                className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Tenant </label>
              <input
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

        <div className="flex justify-between mb-4">
          <h3>Heat</h3>
          <div className="flex gap-6 ">
            <div className="flex flex-col gap-2">
              <label>LandLord </label>

              <input
                name="heat"
                type="radio"
                value="landlord"
                checked={utilityInfo.heat === "landlord"}
                onChange={(e) => handleUpdateUtilityInfo(e)}
                className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Tenant </label>
              <input
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

        <div className="flex justify-between mb-4">
          <h3>Water</h3>
          <div className="flex gap-6 ">
            <div className="flex flex-col gap-2">
              <label>LandLord </label>

              <input
                name="water"
                type="radio"
                value="landlord"
                checked={utilityInfo.water === "landlord"}
                onChange={(e) => handleUpdateUtilityInfo(e)}
                className="w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Tenant </label>
              <input
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
        {/* <label className="">
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
      </form>
    </div>
  );
}
