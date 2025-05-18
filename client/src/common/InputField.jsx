// Reusable input component
export default function InputField({
  placeholder,
  name,
  type,
  value,
  onChange,
  className = "bg-transparent font-header w-full text-base mb-4 mt-4 placeholder-gray-500 border-b-2 border-black py-2 focus:border-[#43A047] focus:outline-none",
}) {
  return (
    <input
      placeholder={placeholder}
      name={name}
      type="text"
      onChange={onChange}
      value={value}
      className={className}
    />
  );
}
