import { useEffect, useState } from "react";
import EmptyImage from "../assets/example/empty.png";
import { api } from "../lib/api";
import { Button } from "./Button";

export function Card({ student, address }) {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    api.get("/procareer-all", { id_student: student.id }).then((response) => {
      setExperiences(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="flex w-full md:w-5/12 rounded-lg h-64 shadow-xl">
      <div className="p-1 w-5/12 flex gap-3 flex-col bg-brand-500 rounded-l-lg">
        <div className="h-4/6 ">
          <div
            style={{
              backgroundImage: `url(${
                student.photo ? student.photo : EmptyImage
              })`,
            }}
            alt="foto da pessoa"
            className="h-full w-[127px]  bg-center bg-cover rounded-3xl m-auto mt-2"
          />
        </div>
        <h1 className="text-xs md:text-[16px] font-semibold text-center text-white">
          {student.name}, {student.pronoun}
        </h1>
        <h1 className="text-center text-xs md:text-[16px] font-semibold text-white mb-3">
          {address.country
            ? address.country + ", " + address.city + " - " + address.state
            : "Endereço não informado"}
        </h1>
      </div>
      <div className="flex p-5 gap-2 items-center flex-col w-7/12 bg-gradient-to-b from-zinc-200 to-white rounded-r-lg">
        <h1 className="h-1/6 font-semibold text-center mb-2 ">
          Atuação profissional
        </h1>
        <div className="h-4/6 break-all text-sm overflow-auto scrollbar ">
          <ul>
            {experiences.map((experience) => (
              <li key={experience.procareer.id}>
                <strong>{experience.procareer.procareer + "  "}</strong>
                {experience.procareer.dateInitiated +
                  " - " +
                  experience.procareer.dateClosing}
              </li>
            ))}
          </ul>
        </div>
        <Button className="text-xs md:text-sm h-1/6 ">Abrir Perfil</Button>
      </div>
    </div>
  );
}
