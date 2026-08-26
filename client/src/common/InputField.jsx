export default function InputField({ placeholder, label, name, type = "text", value, onChange, className = "form-input", ...props }) {
  const inputId = props.id || name;
  const visibleLabel = label || placeholder;
  return (
    <div className="field-group">
      {visibleLabel && <label htmlFor={inputId}>{visibleLabel}</label>}
      <input {...props} id={inputId} placeholder={placeholder} name={name} type={type} onChange={onChange} value={value} className={className} />
    </div>
  );
}
