// Reusable radio input component
export default function RadioInput({ label, value, checked, onChange }) {
  return (
    <div className="radio-input">
      <label className="radio-label">{label}</label>
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        className="radio-button"
      />
    </div>
  );
}
