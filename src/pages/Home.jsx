import { Navigator } from "../components/Navigator";
import { Main } from "../components/Main";

import LogoUNEB from "../assets/logo/uneb.svg";

export function Home() {
  return (
    <div className="p-5 flex flex-col gap-20 items-center">
      <img className="absolute top-4 right-4" src={LogoUNEB} alt="logo" />
      <Navigator />
      <Main />
    </div>
  );
}
