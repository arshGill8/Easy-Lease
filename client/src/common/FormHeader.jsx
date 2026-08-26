export default function FormHeader({ title, subtitle }) {
  return (
    <div className="form-heading">
      {title && <h2>{title}</h2>}
      {subtitle && (
        <p>
          {subtitle}
        </p>
      )}
    </div>
  );
}
