import { useDispatch, useSelector } from "react-redux";
import { updatePropertyInfo } from "./propertyInfoSlice";
import InputField from "../../common/InputField";
import RadioButton from "../../common/RadioButton";

export default function PropertyInfo() {
  const dispatch = useDispatch();
  const propertyInfo = useSelector((state) => state.propertyInfo);

  const handleUpdatePropertyInfo = (e) => {
    const { name, value } = e.target;
    dispatch(updatePropertyInfo({ name, value }));
  };

  return (
    <div className="w-full ">
      <form className="my-10">
        <h1 className=" mb-5 flex justify-center ">Rental Unit Info</h1>
        <p className="mb-5 text-lg text-center lg:text-xl">
          The landlord will rent to the tenant the rental unit at:
        </p>

        <InputField
          placeholder="Unit (e.g., unit 1 or basement unit)"
          name="unit"
          type="text"
          onChange={(e) => handleUpdatePropertyInfo(e)}
          value={propertyInfo.unit}
          className="w-full mb-4 inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md "
        />

        <InputField
          placeholder="Street Number"
          name="streetNumber"
          type="text"
          onChange={(e) => handleUpdatePropertyInfo(e)}
          value={propertyInfo.streetNumber}
          className="w-full mb-4 inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
        />

        <InputField
          placeholder="Street Name"
          name="streetName"
          type="text"
          onChange={(e) => handleUpdatePropertyInfo(e)}
          value={propertyInfo.streetName}
          className="w-full mb-4 inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
        />

        <InputField
          placeholder="Toronto"
          name="city"
          type="text"
          onChange={(e) => handleUpdatePropertyInfo(e)}
          value={propertyInfo.city}
          className="w-full mb-4 inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
        />

        <InputField
          placeholder="Postal Code"
          name="postalCode"
          type="text"
          onChange={(e) => handleUpdatePropertyInfo(e)}
          value={propertyInfo.postalCode}
          className="mb-4 w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
        />

        <InputField
          placeholder="Number of vehicle parking spaces and desc."
          name="parkingSpace"
          type="text"
          onChange={(e) => handleUpdatePropertyInfo(e)}
          value={propertyInfo.parkingSpace}
          className="w-full mb-4 inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
        />

        <div className=" flex flex-col gap-2.5 items-center rounded border p-3 md:pr-9 border-gray-300">
          <label className=" text-black text-md w-3/4 text-center lg:text-xl">
            The rental unit is in a condominium?
          </label>
          <div className="flex gap-6 w-1/4 justify-center">
            <div className="flex gap-2">
              <label className="lg:text-lg">Yes</label>
              <input
                name="inCondo"
                type="radio"
                value="yes"
                onChange={(e) => handleUpdatePropertyInfo(e)}
                checked={propertyInfo.inCondo === "yes"}
                className="w-full"
              />
            </div>

            <div className="flex gap-2 ">
              <label className="lg:text-lg">No</label>
              <input
                name="inCondo"
                type="radio"
                value="no"
                onChange={(e) => handleUpdatePropertyInfo(e)}
                checked={propertyInfo.inCondo === "no"}
                className="w-full "
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
