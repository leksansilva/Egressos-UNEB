import LogoUNEB from "../assets/logo/uneb.svg";

import { Outlet } from "react-router";
import { useState } from "react";

export function Register() {
  return (
    <div className="px-5 flex flex-col gap-20 items-center">
      <section className="mt-16">
        <img className="absolute top-4 right-4" src={LogoUNEB} alt="logo" />
        <h1 className="font-bold text-4xl text-center ">Dados Cadastrais</h1>
      </section>
      <section className="w-full">
        <Outlet />
      </section>
    </div>
  );
}
