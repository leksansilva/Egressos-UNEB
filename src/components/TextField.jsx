import { useEffect } from "react";

export function TextField({
  onChange,
  name,
  value,
  describe,
  type,
  fullWidth,
  className,
  onKeyUp,
  required,
  error,
  min,
  max,
  step,
}) {
  useEffect(() => {}, [error]);
  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      {describe && (
        <label
          className={`${error ? "text-red-500" : "text-white"} text-xl`}
          htmlFor={name}
        >
          {describe}:
        </label>
      )}
      <input
        required={required}
        min={min}
        max={max}
        step={step}
        className={` px-6 text-gray-500 rounded-2xl h-11 outline-none border-2 focus:border-gray-400 ${
          error ? "border-red-500" : "border-white"
        } ${fullWidth ? "w-full" : "w-full"}`}
        type={type ? type : "text"}
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        onKeyUp={onKeyUp}
      />
    </div>
  );
}
