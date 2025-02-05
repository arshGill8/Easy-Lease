import { useDispatch, useSelector } from "react-redux";
import { updateRentalUnit } from "./rentalUnitSlice";
import InputField from "../../common/InputField";
import RadioButton from "../../common/RadioButton";

export default function rentalUnit() {
  const dispatch = useDispatch();
  const rentalUnit = useSelector((state) => state.rentalUnit);

  const handleUpdateRentalUnit = (e) => {
    const { name, value } = e.target;
    dispatch(updateRentalUnit({ name, value }));
  };

  return (
    <div className="w-full ">
      <form className="my-10">
        <h1 className=" mb-5 flex justify-center ">Rental Unit</h1>
        <p className="mb-5 text-lg text-center lg:text-xl">
          The landlord will rent to the tenant the rental unit at:
        </p>

        <InputField
          placeholder="Unit (ex. unit 1 or bsmnt unit)"
          name="unit"
          type="text"
          onChange={(e) => handleUpdateRentalUnit(e)}
          value={rentalUnit.unit}
          className="w-full mb-4 inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md "
        />
        

        <InputField
          placeholder="Street Number"
          name="streetNumber"
          type="text"
          onChange={(e) => handleUpdateRentalUnit(e)}
          value={rentalUnit.streetNumber}
          className="w-full mb-4 inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
        />

        <InputField
          placeholder="Street Name"
          name="streetName"
          type="text"
          onChange={(e) => handleUpdateRentalUnit(e)}
          value={rentalUnit.streetName}
          className="w-full mb-4 inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
        />

        <InputField
          placeholder="City/Town"
          name="city"
          type="text"
          onChange={(e) => handleUpdateRentalUnit(e)}
          value={rentalUnit.city}
          className="w-full mb-4 inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
        />

        <InputField
          placeholder="Postal Code"
          name="postalCode"
          type="text"
          onChange={(e) => handleUpdateRentalUnit(e)}
          value={rentalUnit.postalCode}
          className="mb-4 w-full inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
        />

        <InputField
          placeholder="# of parking spaces & desc."
          name="parkingSpace"
          type="text"
          onChange={(e) => handleUpdateRentalUnit(e)}
          value={rentalUnit.parkingSpace}
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
                onChange={(e) => handleUpdateRentalUnit(e)}
                checked={rentalUnit.inCondo === "yes"}
                className="w-full"
              />
            </div>

            <div className="flex gap-2 ">
              <label className="lg:text-lg">No</label>
              <input
                name="inCondo"
                type="radio"
                value="no"
                onChange={(e) => handleUpdateRentalUnit(e)}
                checked={rentalUnit.inCondo === "no"}
                className="w-full "
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
