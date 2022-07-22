export function FormSection({ children }) {
  return (
    <section
      className="bg-brand-500 rounded-xl  
    flex justify-between items-start flex-wrap 
    gap-2 py-5 px-10 w-full"
    >
      {children}
    </section>
  );
}
