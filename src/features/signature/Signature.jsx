import LandlordSignature from "./landlordSignature/LandlordSignature";
import TenantSignature from "./tenantSignature/TenantSignature";

export default function Signature() {
  return (
    <div className="w-full">
      <LandlordSignature />
      <TenantSignature />
    </div>
  );
}
