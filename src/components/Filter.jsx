import { useState } from "react";
import DownIcon from "../assets/icons/down.svg";

export function Filter() {
  const [openSelect, setOpenSelect] = useState(false);

  return (
    <div className="relative bg-brand-500 ml-5 w-56 h-10 rounded-full text-white outline-white outline-1  outline">
      <select
        onClick={() => setOpenSelect(!openSelect)}
        className=" z-[1] cursor-pointer bg-transparent w-full h-full px-5 py-2 outline-none appearance-none peer"
      >
        <option className="bg-brand-500 px-5 py-2" value="">
          FILTRAR
        </option>
        <option className="bg-brand-500 px-5 py-2" value="1">
          Ano - Mais Recente
        </option>
        <option className="bg-brand-500 px-5 py-2" value="2">
          Ano - Menos Recente
        </option>
        <option className="bg-brand-500 px-5 py-2" value="3">
          etc
        </option>
      </select>
      <img
        className={`absolute right-4 top-4 transition-all delay-100	 ${
          openSelect && "-rotate-180"
        }`}
        src={DownIcon}
      />
    </div>
  );
}
