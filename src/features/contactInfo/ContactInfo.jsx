import { useSelector, useDispatch } from "react-redux";
import { updateContactInfo } from "./contactInfoSlice";
export default function ContactInfo() {
  const dispatch = useDispatch();
  const contactInfo = useSelector((state) => state.contactInfo);

  const handleUpdateContactInfo = (e) => {
    const { name, value } = e.target;
    dispatch(updateContactInfo({ name, value }));
  };

  return (
    <div className="w-full mb-2">
      <form className="my-8">
        <h1 className="mb-8 text-center flex justify-center ">
          Address for Giving Notices/Documents to the Landlord
        </h1>

        <div>
          <input
            placeholder=" Unit (e.g., unit 1 or basement unit)"
            name="unit"
            type="text"
            onChange={(e) => handleUpdateContactInfo(e)}
            value={contactInfo.unit}
            className="w-full mb-4 inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>

        <div>
          <input
            placeholder="Street Number"
            name="streetNumber"
            type="text"
            onChange={(e) => handleUpdateContactInfo(e)}
            value={contactInfo.streetNumber}
            className="w-full mb-4 inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>

        <div>
          <input
            placeholder="Street Name"
            name="streetName"
            type="text"
            onChange={(e) => handleUpdateContactInfo(e)}
            value={contactInfo.streetName}
            className="w-full mb-4 inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>

        <div>
          <input
            placeholder="PO Box"
            name="po"
            type="text"
            onChange={(e) => handleUpdateContactInfo(e)}
            value={contactInfo.po}
            className="w-full mb-4 inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>

        <div>
          <input
            placeholder="City/Town"
            name="city"
            type="text"
            onChange={(e) => handleUpdateContactInfo(e)}
            value={contactInfo.city}
            className="w-full mb-4 inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>

        <div>
          <input
            maxLength={2}
            placeholder="Province"
            name="province"
            type="text"
            onChange={(e) => handleUpdateContactInfo(e)}
            value={contactInfo.province}
            className="w-full mb-4 inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>

        <div>
          <input
            placeholder="Postal Code"
            name="postalCode"
            type="text"
            onChange={(e) => handleUpdateContactInfo(e)}
            value={contactInfo.postalCode}
            className="w-full mb-4 inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
          />
        </div>

        <div className="border flex flex-col items-center mt-1 px-2 rounded">
          <p className=" my-4 text-gray-900 text-md p-1 text-center mb-3">
            Both the landlord and tenant agree to receive notices and documents
            by email, where allowed by the Landlord and Tenant Board’s Rules of
            Procedure.
          </p>
          <div className="flex gap-6 w-1/4 justify-center mb-3">
            <div className="flex gap-2">
              <label>Yes</label>
              <input
                name="emailContact"
                type="radio"
                onChange={(e) => handleUpdateContactInfo}
                checked={contactInfo.emailContact === "yes"}
                value="yes"
                className=""
              />
            </div>

            <div className="flex gap-2">
              <label className="">No</label>
              <input
                name="emailContact"
                type="radio"
                value="no"
                checked={contactInfo.emailContact === "no"}
                onChange={(e) => handleUpdateContactInfo}
                className=""
              />
            </div>
          </div>

          {contactInfo.emailContact === "yes" && (
            <>
              <label className="block mb-2 text-md text-gray-900">
                If yes, provide email address:{" "}
              </label>
              <input
                placeholder=""
                name="emailContact"
                type="text"
                onChange={(e) => handleUpdateContactInfo(e)}
                value={contactInfo.emailContact}
                className="w-full mb-4 inline border border-gray-300 text-gray-900 text-md rounded-lg p-2.5 focus:shadow-md"
              />
            </>
          )}
        </div>

        <div className="border mt-6 flex flex-col items-center px-2 rounded">
          <p className=" my-4 text-gray-900 text-md p-1 px-2 text-center mb-3">
            The landlord is providing phone and/or email contact information for
            emergencies or day-to-day communications:
          </p>

          <div className="flex gap-6 w-1/4 justify-center mb-3 ">
            <div className="flex gap-2">
              <label>Yes</label>
              <input
                name="emergencyContact"
                type="radio"
                value="yes"
                checked={contactInfo.emergencyContact === "yes"}
                onChange={(e) => handleUpdateContactInfo}
                className=""
              />
            </div>
            <div className="flex gap-2">
              <label className="">No</label>
              <input
                name="emergencyContactInfo"
                type="radio"
                value="no"
                checked={contactInfo.emergencyContactInfo === "no"}
                onChange={handleUpdateContactInfo}
                className=""
              />
            </div>
          </div>
          {contactInfo.emergencyContactInfo === "yes" && (
            <>
              <label className="block mb-2  text-gray-900">
                If yes, provide information:
              </label>
              <input
                name="emergencyContactInfo"
                type="text"
                onChange={handleUpdateContactInfo}
                value={contactInfo.emergencyContactInfo}
                className="w-full mb-4 inline border border-gray-300 text-gray-900 text-md rounded-lg p-2.5 focus:shadow-md"
              />
            </>
          )}
        </div>
      </form>
    </div>
  );
}
