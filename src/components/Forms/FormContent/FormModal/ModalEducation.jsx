import { useEffect, useState } from "react";
import { getYearsArray } from "../../../../utils/getYearsArray";
import { Button } from "../../../Button";
import { SelectField } from "../../../SelectField";
import { TextField } from "../../../TextField";
import { Modal } from "./Modal";
import PlusIcon from "../../../../assets/icons/plus.svg";
import MinusIcon from "../../../../assets/icons/minus.svg";

export const initialValues = {
  id: 1,
  describe: "",
  initialYear: "0",
  finalYear: "0",
};
let i = 2;
export function ModalEducation({ open, closeModal, handleSaveEducations }) {
  const [educations, setEducations] = useState([initialValues]);
  const years = getYearsArray();

  const addEducation = () => {
    setEducations([...educations, { ...initialValues, id: i }]);
    i++;
  };
  const removeEducation = (id) => {
    setEducations(educations.filter((e) => e.id !== id));
  };

  const onChange = (ev, index) => {
    const { name, value } = ev.target;
    setEducations(
      educations.map((education, i) => {
        if (index === i) {
          return { ...education, [name]: value };
        } else {
          return education;
        }
      })
    );
  };

  return (
    <Modal size="xl" open={open} closeModal={closeModal} s>
      <div className="flex flex-col gap-7">
        <h1 className="text-white text-2xl font-semibold">
          Histórico Escolar:
        </h1>
        <div className="flex flex-col h-[50vh] min-h-min overflow-auto scrollbar px-5">
          {educations.map((value, index) => (
            <div key={index} className="mt-2">
              <h2 className="text-white text-xl font-semibold">
                Descrição {index + 1}
              </h2>
              <div className="flex gap-7">
                <TextField
                  onChange={(ev) => onChange(ev, index)}
                  value={value.describe}
                  name="describe"
                  className=" w-4/12"
                  describe="Graduação"
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
                  describe="Término"
                />
                {educations.length > 0 && (
                  <Button
                    icon={MinusIcon}
                    onClick={() => removeEducation(value.id)}
                    className="border-2 mt-9 bg-center rounded-xl w-11 px-0 h-11 "
                  />
                )}
              </div>

              <hr className="mt-5" />
            </div>
          ))}
          <div className=" self-center flex gap-5">
            <Button
              onClick={() => addEducation(educations.length)}
              icon={PlusIcon}
              className="border-2 mt-5 bg-center rounded-xl w-11 px-0 h-11 "
            />
          </div>
        </div>

        <div className="flex gap-4  self-end">
          <Button
            onClick={() => handleSaveEducations(educations)}
            className="bg-green-400 hover:bg-green-500"
          >
            Salvar
          </Button>
          <Button
            onClick={() => {
              closeModal();
              setEducations([initialValues]);
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
