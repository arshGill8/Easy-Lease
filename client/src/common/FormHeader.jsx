export default function FormHeader({ title, subtitle }) {
  return (
    <div>
      <h2 className=" mb-10 mt-10 text-center underline underline-offset-4 text-2xl md:text-2xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mb-6 text-center flex justify-center font-black md:text-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
