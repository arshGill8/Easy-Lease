import { LandlordName } from "./landlordName";
import { TenantName } from "./tenantName";

export default function Name() {
  return (
    <div className="w-full">
      <LandlordName />
      <TenantName />
    </div>
  );
}
