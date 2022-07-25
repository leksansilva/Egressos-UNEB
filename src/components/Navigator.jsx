import { Link } from "react-router-dom";
import logoEgressos from "../assets/logo/egressos.svg";
import { Filter } from "./Filter";

export function Navigator() {
  return (
    <div
      className="w-10/12  md:w-8/12 flex items-center self-start md:self-center
      mt-0 md:mt-20 h-16 rounded-2xl bg-brand-500 overflow-hidden"
    >
      <img src={logoEgressos} alt="logo egressos" className="mx-7 h-4/6" />
      <input
        type="text"
        id="search"
        className="p-2 outline-none bg-search-pattern  bg-no-repeat bg-right-1 rounded-2xl border-none w-5/12 h-10 image"
        placeholder="Buscar ..."
      />

      <Filter />
      <Link to="/login">
        <h2 className="text-white font-bold mx-12 lg:mx-0 lg:ml-24">LOGIN</h2>
      </Link>
    </div>
  );
}
