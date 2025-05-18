export default function FormHeader({ title, subtitle }) {
  return (
    <div>
      <h2 className=" mb-10 text-center font-header underline underline-offset-2 font-medium text-xl md:text-2xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mb-6 text-center flex justify-center font-medium md:text-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
