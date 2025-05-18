import FormHeader from "../../common/FormHeader";
import InputField from "../../common/InputField";
import { useSelector, useDispatch } from "react-redux";
import { updateContactInfo } from "./contactInfoSlice";
import RadioButton from "../../common/RadioButton";

export default function ContactInfo() {
  const dispatch = useDispatch();

  const contactInfo = useSelector((state) => state.contactInfo);

  const handleUpdateContactInfo = (e) => {
    const { name, value } = e.target;
    dispatch(updateContactInfo({ name, value }));
  };

  return (
    <div className="w-full mb-14">
      <FormHeader title="        Address for Giving Notices/Documents to the Landlord" />

      <InputField
        placeholder="Unit (e.g. unit 1 or basement unit)"
        name="unit"
        type="text"
        onChange={(e) => handleUpdateContactInfo(e)}
        value={contactInfo.unit}
      />

      <InputField
        placeholder="Street Number"
        name="streetNumber"
        type="text"
        onChange={(e) => handleUpdateContactInfo(e)}
        value={contactInfo.streetNumber}
      />

      <InputField
        placeholder="Street Name"
        name="streetName"
        type="text"
        onChange={(e) => handleUpdateContactInfo(e)}
        value={contactInfo.streetName}
      />

      <InputField
        placeholder="PO Box"
        name="po"
        type="text"
        onChange={(e) => handleUpdateContactInfo(e)}
        value={contactInfo.po}
      />

      <InputField
        placeholder="City/Town"
        name="city"
        type="text"
        onChange={(e) => handleUpdateContactInfo(e)}
        value={contactInfo.city}
      />

      <InputField
        maxLength={2}
        placeholder="Province"
        name="province"
        type="text"
        onChange={(e) => handleUpdateContactInfo(e)}
        value={contactInfo.province}
      />

      <InputField
        placeholder="Postal Code"
        name="postalCode"
        type="text"
        onChange={(e) => handleUpdateContactInfo(e)}
        value={contactInfo.postalCode}
      />

      <div className="p-3 border flex flex-col items-center mt-8  rounded border-black">
        <p className=" text-lg p-1 text-center">
          Both the landlord and tenant agree to receive notices and documents by
          email, where allowed by the Landlord and Tenant Board’s Rules of
          Procedure.
        </p>
        <div className="flex gap-6 w-1/4 justify-center my-4">
          <div className="flex gap-2">
            <label className="text-base">Yes</label>
            <RadioButton
              name="emailContact"
              value="yes"
              onChange={(e) => handleUpdateContactInfo(e)}
              checked={contactInfo.emailContact === "yes"}
            />
          </div>

          <div className="flex gap-2">
            <label className="text-base">No</label>
            <RadioButton
              name="emailContact"
              value="no"
              checked={contactInfo.emailContact === "no"}
              onChange={(e) => handleUpdateContactInfo(e)}
            />
          </div>
        </div>

        {contactInfo.emailContact === "yes" && (
          <div className="md:w-4/5 ">
            <label className="text-center flex justify-center mt-2 text-lg  underline-offset-4 underline">
              If yes, provide email addresses (separated by commas):{" "}
            </label>{" "}
            <InputField
              placeholder="Email Address"
              name="emailContactInfo"
              onChange={(e) => handleUpdateContactInfo(e)}
              value={contactInfo.emailContactInfo}
            />
          </div>
        )}
      </div>

      <div className="p-3 border flex flex-col items-center mt-8  rounded border-black">
        <p className=" text-lg p-1 text-center">
          The landlord is providing phone and/or email contact information for
          emergencies or day-to-day communications:
        </p>

        <div className="flex gap-6 w-1/4 justify-center my-4 ">
          <div className="flex gap-2">
            <label className="text-base">Yes</label>
            <RadioButton
              name="emergencyContact"
              value="yes"
              checked={contactInfo.emergencyContact === "yes"}
              onChange={(e) => handleUpdateContactInfo(e)}
            />
          </div>
          <div className="flex gap-2">
            <label className="text-base">No</label>
            <RadioButton
              name="emergencyContact"
              value="no"
              checked={contactInfo.emergencyContact === "no"}
              onChange={(e) => handleUpdateContactInfo(e)}
            />
          </div>
        </div>
        {contactInfo.emergencyContact === "yes" && (
          <div className="md:w-4/5 ">
            <label className="text-center flex justify-center mt-2 text-lg  underline-offset-4 underline">
              If yes, provide information:
            </label>
            <InputField
              name="emergencyContactInfo"
              onChange={(e) => handleUpdateContactInfo(e)}
              value={contactInfo.emergencyContactInfo}
              placeholder="Phone Number/Email Address"
            />
          </div>
        )}
      </div>
    </div>
  );
}
