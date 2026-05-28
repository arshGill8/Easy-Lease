import { LandlordName } from "./landlordName";
import { TenantName } from "./tenantName";
import FormHeader from "../../common/FormHeader";

export default function Name() {
  return (
    <div className="w-full ">
      <FormHeader title="Names" subtitle="Please enter all names." />
      <LandlordName />
      <TenantName />
    </div>
  );
}
