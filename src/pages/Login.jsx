import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import LogoUNEB from "../assets/logo/uneb.svg";
import LogoEgressos from "../assets/logo/egressos.svg";
import LoginIcon from "../assets/icons/login.svg";
import RegisterIcon from "../assets/icons/register.svg";

import { TextField } from "../components/TextField";
import { Loading } from "../components/Loading";
import { api } from "../lib/api";
import { NotificationContext } from "../context/Context";

const initialValues = {
  login: "",
  password: "",
};

export function Login() {
  const [values, setValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const { message } = useContext(NotificationContext);
  console.log(message);

  const onChange = (ev) => {
    const { value, name } = ev.target;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    setLoading(true);
    api
      .post("/login", values)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };

  return loading ? (
    <Loading screen />
  ) : (
    <>
      <div className="absolute top-4 right-4 circle bg-white w-24 h-24 md:w-32 md:h-32">
        <img src={LogoUNEB} alt="logo" className="m-auto w-auto" />
      </div>
      <div className="w-[100vw] h-[100vh] overflow-hidden bg-brand-500 pl-5 md:pt-44 md:px-40 flex flex-col  md:flex-row gap-5 justify-center items-center">
        <section className="w-2/6  md:w-1/2 h-1/2 md:h-full  flex flex-col-reverse  self-start justify-end mt-2 md:justify-start md:flex-col md:items-center">
          <h1 className="font-bold text-xl md:text-4xl text-center text-white">
            Faça o login em nossa plataforma
          </h1>
          <img
            src={LogoEgressos}
            className="h-32 w-32 md:mt-14 md:w-56 md:h-56"
            alt="logo egressos"
          />
        </section>
        <section className="w-64 md:w-1/2 h-full">
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <h1 className="font-semibold text-xl md:text-4xl text-center text-white">
              LOGIN
            </h1>
            <TextField
              fullWidth
              className="md:mt-11 w-5/6"
              type="text"
              onChange={onChange}
              value={values.login}
              describe="CPF"
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

            <button
              className="h-6 w-6 md:h-20 md:w-20 mt-3 md:mt-8"
              type="submit"
            >
              <img src={LoginIcon} alt="Login" className="h-auto" />
            </button>
            <Link
              to="/register/data1"
              className="mt-3 md:mt-8 flex gap-1 md:gap-3"
            >
              <p className="md:text-lg text-white font-semibold">
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
