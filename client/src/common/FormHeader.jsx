export default function FormHeader({ title, subtitle }) {
  return (
    <div>
      <h2 className="text-center underline underline-offset-4 text-2xl md:text-2xl">
        {title}
      </h2>
      {subtitle && (
        <p className="italic font-light mt-3 mb-10 text-center flex justify-center md:text-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
