import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../../../common/InputField";
import {
  updateTenantName,
  addTenantName,
  removeTenantName,
} from "./tenantNameSlice";

export default function TenantName() {
  const tenantName = useSelector((state) => state.tenantName);
  const dispatch = useDispatch();

  const handleTenantNameChange = (e, index) => {
    const newData = { [e.target.name]: e.target.value };
    dispatch(updateTenantName({ index, data: newData }));
  };

  const handleAddTenantName = () => {
    dispatch(addTenantName());
  };

  const handleRemoveTenantName = (index) => {
    dispatch(removeTenantName(index));
  };

  return (
    <div className="w-full mb-12">
      <h3
        className="flex w-full text-lg  mb-2 justify-center mt-6 font-header
"
      >
        Tenant's Legal Name (s)
      </h3>

      {tenantName.map((singleTenantName, i) => (
        <div key={i} className="mb-6">
          <div className="md:flex w-full gap-16 mb-1">
            <div className="w-full">
              <InputField
                placeholder={`${i + 1}. Tenant's Legal First Name`}
                name="tenantFirstName"
                type="text"
                onChange={(e) => handleTenantNameChange(e, i)}
                value={singleTenantName.tenantFirstName}
              />
            </div>
            <div className="w-full">
              <InputField
                placeholder={`${i + 1}. Tenant's Legal Last Name`}
                name="tenantLastName"
                type="text"
                onChange={(e) => handleTenantNameChange(e, i)}
                value={singleTenantName.tenantLastName}
              />
            </div>
          </div>

          <div className="flex mt-2">
            {tenantName.length > 1 && (
              <button
                className="w-1/2.5 py-1.5 px-2 md:w-1/5 flex gap-1 items-center justify-center text-sm text-white font-thin bg-red-500 rounded hover:bg-red-600 shadow-sm"
                type="button"
                onClick={() => handleRemoveTenantName(i)}
              >
                Remove <FaMinus />
              </button>
            )}

            {tenantName.length - 1 == i && tenantName.length < 5 && (
              <button
                className="w-1/2.5 py-1.5 px-2 md:w-1/5 ml-auto flex gap-1 items-center justify-center text-sm text-white bg-green-600  font-thin rounded-sm hover:bg-green-600 shadow-md"
                type="button"
                onClick={handleAddTenantName}
              >
                Add Tenant <FaPlus />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
