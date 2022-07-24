import { getYearsArray } from "../../../../utils/getYearsArray";
import { Modal } from "./Modal";
import PlusIcon from "../../../../assets/icons/plus.svg";
import MinusIcon from "../../../../assets/icons/minus.svg";
import { useState } from "react";
import { SelectField } from "../../../SelectField";
import { TextField } from "../../../TextField";
import { Button } from "../../../Button";

const initialValues = {
  id: 1,
  describe: "",
  initialYear: "0",
  finalYear: "0",
};
let i = 2;

export function ModalExperience({ open, closeModal, handleSaveExperiences }) {
  const [experiences, setExperiences] = useState([initialValues]);
  const years = getYearsArray();

  const addExperience = () => {
    setExperiences([...experiences, { ...initialValues, id: i }]);
    i++;
  };
  const removeExperience = (id) => {
    setExperiences(experiences.filter((e) => e.id !== id));
  };

  const onChange = (ev, index) => {
    const { name, value } = ev.target;
    setExperiences(
      experiences.map((experience, i) => {
        if (index === i) {
          return { ...experience, [name]: value };
        } else {
          return experience;
        }
      })
    );
  };
  return (
    <Modal size="xl" open={open} closeModal={closeModal} s>
      <div className="flex flex-col gap-7">
        <h1 className="text-white text-2xl font-semibold">
          Histórico Profissional:
        </h1>
        <div className="flex flex-col h-[50vh] min-h-min overflow-auto scrollbar px-5">
          {experiences.map((value, index) => (
            <div key={index} className="mt-2">
              <h2 className="text-white text-xl font-semibold">
                Profissão {index + 1}
              </h2>
              <div className="flex gap-7">
                <TextField
                  onChange={(ev) => onChange(ev, index)}
                  value={value.describe}
                  name="describe"
                  className=" w-4/12"
                  describe="Profissão"
                />
                <SelectField
                  onChange={(ev) => onChange(ev, index)}
                  value={value.initialYear}
                  name="initialYear"
                  options={years}
                  className=" w-3/12"
                  describe="Inicio"
                />
                <SelectField
                  value={value.finalYear}
                  name="finalYear"
                  onChange={(ev) => onChange(ev, index)}
                  describeDefault="Atualmente"
                  options={years}
                  className=" w-3/12"
                  describe="Até"
                />
                {experiences.length > 0 && (
                  <Button
                    icon={MinusIcon}
                    onClick={() => removeExperience(value.id)}
                    className="border-2 mt-9 bg-center rounded-xl w-11 px-0 h-11 "
                  />
                )}
              </div>

              <hr className="mt-5" />
            </div>
          ))}
          <div className=" self-center flex gap-5">
            <Button
              onClick={() => addExperience(experiences.length)}
              icon={PlusIcon}
              className="border-2 mt-5 bg-center rounded-xl w-11 px-0 h-11 "
            />
          </div>
        </div>

        <div className="flex gap-4  self-end">
          <Button
            onClick={() => handleSaveExperiences(experiences)}
            className="bg-green-400 hover:bg-green-500"
          >
            Salvar
          </Button>
          <Button
            onClick={() => {
              closeModal();
              setExperiences([initialValues]);
            }}
            className="bg-red-400 hover:bg-red-500"
          >
            Cancelar
          </Button>
        </div>
      </div>
    </Modal>
  );
}
