import { Outlet, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { Button } from "../components/Button";

import LogoUNEB from "../assets/logo/uneb.svg";
import ArrowLeft from "../assets/icons/arrowLeft.svg";
import ArrowRight from "../assets/icons/arrowRight.svg";
import { api } from "../lib/api";
import { initialValues, manager } from "../utils/presets";

export function Register() {
  const [values, setValues] = useState(initialValues);
  const [optionsCourses, setOptionsCoursers] = useState([]);
  const { pathname } = useLocation();

  const onChange = (ev) => {
    const { value, name } = ev.target;

    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(values);
    const educations = values.educations;
    const experiences = values.experiences;

    api
      .post("/register", values)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    api
      .get("/course-all")
      .then((response) => {
        const courses = response.data;
        const data = courses.map((i) => ({ value: i.id, label: i.course }));
        setOptionsCoursers(data);
      })
      .catch((err) => {});
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="px-5 flex flex-col gap-8 items-center"
    >
      <section className="mt-16 self-start md:mt-16 md:self-center">
        <img
          className="absolute top-4 right-4 w-16 md:w-24"
          src={LogoUNEB}
          alt="logo"
        />
        <h1 className="font-bold text-3xl md:text-4xl md:text-center ">
          Dados Cadastrais
        </h1>
      </section>
      <section className="w-full px-20 flex justify-center">
        <Outlet context={[values, onChange, optionsCourses]} />
      </section>
      <section className="w-full gap-10 flex justify-center mb-5">
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
