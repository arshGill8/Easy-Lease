import { AiOutlinePlusCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
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
    <div className="w-full">
      <form className="my-8">
        <div className="mb-12">
          <h1 className="flex justify-center py-1">Tenant's Legal Name(s)</h1>

          {tenantName.map((singleTenantName, i) => (
            <div key={i}>
              <div className="md:flex w-full gap-10 mb-1">
                <div className="w-full">
                  <input
                    placeholder="Tenant's Legal First Name"
                    name="tenantFirstName"
                    type="text"
                    onChange={(e) => handleTenantNameChange(e, i)}
                    value={singleTenantName.tenantFirstName}
                    className="w-full inline border mb-3.5 mt-8 border-gray-300 text-gray-900  rounded-lg py-2.5 px-1.5  focus:shadow-md lg:h-14 "
                  />
                </div>
                <div className="w-full">
                  <input
                    placeholder="Tenant's Legal Last Name"
                    name="tenantLastName"
                    type="text"
                    onChange={(e) => handleTenantNameChange(e, i)}
                    value={singleTenantName.tenantLastName}
                    className="md:mt-8 w-full inline border my-3.5 border-gray-300 text-gray-900  rounded-lg py-2.5 px-1.5 focus:shadow-md lg:h-14 "
                  />
                </div>
              </div>

              <div className="flex">
                {tenantName.length > 1 && (
                  <button
                    className="w-1/2.5 py-1.5 px-2 md:w-1/5 flex gap-1 items-center justify-center font-medium	 text-white bg-red-500 rounded hover:bg-red-600 shadow-md"
                    type="button"
                    onClick={() => handleRemoveTenantName(i)}
                  >
                    Remove <AiOutlineCloseCircle />
                  </button>
                )}

                {tenantName.length - 1 == i && tenantName.length < 5 && (
                  <button
                    className="w-1/2.5 py-1.5 px-2 md:w-1/5 flex gap-1 items-center justify-center ml-auto  font-medium	 text-white bg-green-500 rounded hover:bg-green-600 shadow-md"
                    type="button"
                    onClick={handleAddTenantName}
                  >
                    Tenant <AiOutlinePlusCircle />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}
