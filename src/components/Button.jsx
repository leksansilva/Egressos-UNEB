export function Button({ children, icon, endIcon, className, ...props }) {
  return (
    <button
      {...props}
      style={{ backgroundImage: `url(${icon})` }}
      className={` px-10 py-2 bg-no-repeat bg-[length:18px_18px] ${
        endIcon ? "bg-right-1" : "bg-left-1"
      } outline-none rounded-md font-semibold bg-brand-500 hover:bg-brand-700 text-white ${className}`}
    >
      {children}
    </button>
  );
}
