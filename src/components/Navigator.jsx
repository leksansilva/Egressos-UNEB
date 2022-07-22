import { Link } from "react-router-dom";
import logoEgressos from "../assets/logo/egressos.svg";
import { Filter } from "./Filter";

export function Navigator() {
  return (
    <div
      className="w-9/12  flex items-center self-start md:self-center
      mt-5 md:mt-20 h-16 rounded-2xl bg-brand-500"
    >
      <img src={logoEgressos} alt="logo egressos" className="mx-7 h-5/6" />
      <input
        type="text"
        id="search"
        className="p-2 outline-none bg-search-pattern  bg-no-repeat bg-right-1 rounded-2xl border-none w-5/12 h-10 image"
        placeholder="Buscar ..."
      />

      <Filter />
      <Link to="/login">
        <h2 className="text-white font-bold ml-24">LOGIN</h2>
      </Link>
    </div>
  );
}
