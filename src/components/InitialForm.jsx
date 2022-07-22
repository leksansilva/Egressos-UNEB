import { useOutletContext } from "react-router-dom";
import { TextField } from "./TextField";

export function InitialForm({ value, onChange }) {
  const context = useOutletContext();
  return (
    <div className=" w-full flex gap-10">
      <section className="bg-brand-500 rounded-xl flex flex-wrap gap-2 p-5 h-96 w-1/2">
        <TextField fullWidth name="name" value={value} onChange={context} />
      </section>
      <section className="bg-brand-500  rounded-xl w-1/2 h-96"></section>
    </div>
  );
}
