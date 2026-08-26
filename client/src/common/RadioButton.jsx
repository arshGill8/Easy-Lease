export default function RadioButton({ name, value, checked, onChange }) {
  const label = value.charAt(0).toUpperCase() + value.slice(1);

  return (
    <input
      aria-label={label}
      name={name}
      type="radio"
      value={value}
      onChange={onChange}
      checked={checked}
      className="choice-input"
    />
  );
}
