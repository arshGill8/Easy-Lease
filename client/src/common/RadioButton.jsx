export default function RadioButton({ name, value, checked, onChange }) {
  return (
    <input
      name={name}
      type="radio"
      value={value}
      onChange={onChange}
      checked={checked}
      className="w-4 bg-transparent"
    />
  );
}
