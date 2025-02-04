// Reusable input component
export default function InputField({
  placeholder,
  name,
  type,
  value,
  onChange,
}) {
  return (
    <input
      placeholder={placeholder}
      name={name}
      type={type}
      onChange={onChange}
      value={value}
      className="w-full mb-4 inline border border-gray-300 text-gray-900 text-md rounded-lg p-3 focus:shadow-md"
    />
  );
}
