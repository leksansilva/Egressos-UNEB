export function TextField({
  onChange,
  name,
  value,
  describe,
  type,
  fullWidth,
  className,
}) {
  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      {describe && (
        <label className="text-white text-xl" htmlFor={name}>
          {describe}:
        </label>
      )}
      <input
        className={` px-6 text-gray-500 rounded-2xl h-11 outline-none border-2 focus:border-gray-400 ${
          fullWidth ? "w-full" : "w-64"
        }`}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        id={name}
      />
    </div>
  );
}
