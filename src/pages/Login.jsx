import { Link } from "react-router-dom";
import { useState } from "react";

import LogoUNEB from "../assets/logo/uneb.svg";
import LogoEgressos from "../assets/logo/egressos.svg";
import LoginIcon from "../assets/icons/login.svg";
import RegisterIcon from "../assets/icons/register.svg";

import { TextField } from "../components/TextField";
import { Loading } from "../components/Loading";

const initialValues = {
  login: "",
  password: "",
};

export function Login() {
  const [values, setValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);

  const onChange = (ev) => {
    const { value, name } = ev.target;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    setLoading(true);
    setLoading(false);
  };

  return loading ? (
    <Loading screen />
  ) : (
    <>
      <div className="absolute top-4 right-4 circle bg-white w-32 h-32">
        <img src={LogoUNEB} alt="logo" className="m-auto" />
      </div>
      <div className="w-[100vw] h-[100vh] bg-brand-500 pt-44 px-40 flex justify-center items-center">
        <section className="w-1/2 h-full flex flex-col items-center">
          <h1 className="font-bold text-4xl text-center text-white">
            Faça o login em nossa plataforma
          </h1>
          <img
            src={LogoEgressos}
            className="h-auto w-56 mt-14"
            alt="logo egressos"
          />
        </section>
        <section className="w-1/2 h-full">
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <h1 className="font-semibold text-4xl text-center text-white">
              LOGIN
            </h1>
            <TextField
              fullWidth
              className="mt-11 w-5/6"
              type="text"
              onChange={onChange}
              value={values.login}
              describe="Usuário"
              name="login"
            />
            <TextField
              onChange={onChange}
              className="mt-8 w-5/6"
              fullWidth
              type="password"
              value={values.password}
              describe="Senha"
              name="password"
            />

            <button type="submit">
              <img src={LoginIcon} alt="Login" className="mt-8" />
            </button>
            <Link to="/register/data1" className="mt-8 flex gap-3">
              <p className="text-lg text-white font-semibold">
                Não tem uma conta?Cadastre-se
              </p>
              <img src={RegisterIcon} className="w-auto h-6" alt="Login" />
            </Link>
          </form>
        </section>
      </div>
    </>
  );
}
