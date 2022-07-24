export function SelectField({
  value,
  onChange,
  options,
  name,
  error,
  describe,
  className,
  describeDefault,
}) {
  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      <label
        className={`${error ? "text-red-500" : "text-white"} text-xl`}
        htmlFor={name}
      >
        {describe}:
      </label>
      <select
        defaultValue="0"
        onChange={onChange}
        name={name}
        id={name}
        className="rounded-2xl h-11 w-full outline-none scrollbar"
      >
        <option value={0}>{describeDefault}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
