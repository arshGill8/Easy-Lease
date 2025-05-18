import { useDispatch, useSelector } from "react-redux";
import { updateRentalUnit } from "./rentalUnitSlice";
import InputField from "../../common/InputField";
import RadioButton from "../../common/RadioButton";
import FormHeader from "../../common/FormHeader";

export default function rentalUnit() {
  const dispatch = useDispatch();
  const rentalUnit = useSelector((state) => state.rentalUnit);

  const handleUpdateRentalUnit = (e) => {
    const { name, value } = e.target;
    dispatch(updateRentalUnit({ name, value }));
  };

  return (
    <div className="w-full mb-14">
      <FormHeader
        title="Rental Unit Info"
        subtitle="The landlord will rent to the tenant the rental unit at:"
      />

      <InputField
        placeholder="Unit (e.g. unit 1 or basement unit)"
        name="unit"
        type="text"
        onChange={(e) => handleUpdateRentalUnit(e)}
        value={rentalUnit.unit}
        required={true}
      />

      <InputField
        placeholder="Street Number"
        name="streetNumber"
        type="text"
        onChange={(e) => handleUpdateRentalUnit(e)}
        value={rentalUnit.streetNumber}
      />

      <InputField
        placeholder="Street Name"
        name="streetName"
        type="text"
        onChange={(e) => handleUpdateRentalUnit(e)}
        value={rentalUnit.streetName}
      />

      <InputField
        placeholder="City/Town"
        name="city"
        type="text"
        onChange={(e) => handleUpdateRentalUnit(e)}
        value={rentalUnit.city}
      />

      <InputField
        placeholder="Postal Code"
        name="postalCode"
        type="text"
        onChange={(e) => handleUpdateRentalUnit(e)}
        value={rentalUnit.postalCode}
      />

      <InputField
        placeholder="# Of Parking Spaces & Description"
        name="parkingSpace"
        type="text"
        onChange={(e) => handleUpdateRentalUnit(e)}
        value={rentalUnit.parkingSpace}
      />

      <div className="mt-8 flex flex-col gap-2.5 items-center rounded border p-3 border-black">
        <label className=" text-lg  w-3/4 text-center ">
          Is the rental unit in a condominium?
        </label>
        <div className="flex gap-6 w-1/4 justify-center">
          <div className="flex  gap-2">
            <label className="text-base">Yes</label>
            <RadioButton
              name="inCondo"
              value="yes"
              onChange={(e) => handleUpdateRentalUnit(e)}
              checked={rentalUnit.inCondo === "yes"}
            />
          </div>

          <div className="flex gap-2 ">
            <label className="text-base">No</label>
            <RadioButton
              name="inCondo"
              value="no"
              onChange={(e) => handleUpdateRentalUnit(e)}
              checked={rentalUnit.inCondo === "no"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
