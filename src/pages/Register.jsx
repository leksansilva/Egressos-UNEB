import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";

import { Button } from "../components/Button";

import LogoUNEB from "../assets/logo/uneb.svg";
import ArrowLeft from "../assets/icons/arrowLeft.svg";
import ArrowRight from "../assets/icons/arrowRight.svg";

const initialValues = {
  name: "",
  password: "",
  course: "",
  cpf: "",
  rg: "",
  birthDate: "",
  linkedin: "",
  photo: "",
  lattes: "",
  pronoun: "",
  contact: "",
  email: "",
  city: "",
  state: "",
  country: "",
  status: 1,
  yearFinish: "",
  facebook: "",
  instagram: "",
  experiences: [],
  educations: [],
};

const manager = {
  "/register/data1": {
    link1: "/login",
    link2: "data2",
    name1: "Cancelar",
    name2: "Próximo",
    className1: "bg-red-400 hover:bg-red-500",
    className2: "",
  },
  "/register/data2": {
    link1: "data1",
    link2: "noLink",
    name1: "Voltar",
    name2: "Enviar",
    className1: "",
    className2: "bg-green-400 hover:bg-green-500",
  },
};

export function Register() {
  const [values, setValues] = useState(initialValues);
  const { pathname } = useLocation();

  const onChange = (ev) => {
    const { value, name } = ev.target;

    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(values);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="px-5 flex flex-col gap-8 items-center"
    >
      <section className="mt-11 md:mt-16">
        <img className="absolute top-4 right-4" src={LogoUNEB} alt="logo" />
        <h1 className="font-bold text-4xl md:text-center ">Dados Cadastrais</h1>
      </section>
      <section className="w-full px-20 flex justify-center">
        <Outlet context={[values, onChange]} />
      </section>
      <section className="w-full gap-10 flex justify-center">
        <Link to={manager[pathname].link1}>
          <Button icon={ArrowLeft} className={manager[pathname].className1}>
            {manager[pathname].name1}
          </Button>
        </Link>
        {manager[pathname].link2 === "noLink" ? (
          <Button
            endIcon
            icon={ArrowRight}
            className={manager[pathname].className2}
            type="submit"
          >
            {manager[pathname].name2}
          </Button>
        ) : (
          <Link to={manager[pathname].link2}>
            <Button
              endIcon
              icon={ArrowRight}
              className={manager[pathname].className2}
            >
              {manager[pathname].name2}
            </Button>
          </Link>
        )}
      </section>
    </form>
  );
}
