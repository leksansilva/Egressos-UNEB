import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { Button } from "../Button";
import { TextField } from "../TextField";
import { FormContent } from "./FormContent/FormContent";
import { FormSection } from "./FormContent/FormSection";
import { Modal } from "../Modal";

import CheckFile from "../../assets/icons/checkFile.svg";
import AddFile from "../../assets/icons/addFile.svg";

export function FinalForm() {
  const [values, onChange] = useOutletContext();
  const [uploadPhoto, setUploadPhoto] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleUploadPhoto = () => {
    setUploadPhoto("oioioo foto bonita");
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      {}
      <Modal open={openModal} closeModal={handleOpenModal} />
      <FormContent>
        <FormSection>
          <div className="w-full  md:w-3/12">
            <h1 className="text-xl mb-2 text-white">Foto:</h1>
            <Button
              onClick={handleOpenModal}
              endIcon
              icon={uploadPhoto ? CheckFile : AddFile}
              className={`border-2 rounded-2xl w-52 ${
                uploadPhoto && "bg-green-400 hover:bg-green-500"
              } 
           `}
            >
              {uploadPhoto ? "Alterar" : "Carregar"}
            </Button>
          </div>

          <TextField
            name="course"
            className="w-full  md:w-4/12"
            describe="Curso"
            value={values.course}
            onChange={onChange}
          />
          <TextField
            name="photo"
            type="date"
            className="w-full  md:w-4/12"
            describe="Ano de Conclusão"
            value={values.yearFinish}
            onChange={onChange}
          />

          <TextField
            name="contact"
            className="w-full  md:w-6/12"
            describe="Contato"
            value={values.contact}
            onChange={onChange}
          />
          <TextField
            name="contact"
            className="w-full  md:w-5/12"
            describe="Contato"
            value={values.contact}
            onChange={onChange}
          />
        </FormSection>
        <FormSection>
          <TextField
            name="facebook"
            className="w-full  md:w-5/12"
            describe="Facebook"
            value={values.facebook}
            onChange={onChange}
          />
          <TextField
            name="linkedin"
            className="w-full  md:w-5/12"
            describe="LinkedIn"
            value={values.linkedin}
            onChange={onChange}
          />
          <TextField
            name="instagram"
            className="w-full  md:w-5/12"
            describe="Instagram"
            value={values.instagram}
            onChange={onChange}
          />
          <TextField
            name="lattes"
            className="w-full  md:w-5/12"
            describe="Currículo Lattes"
            value={values.lattes}
            onChange={onChange}
          />
        </FormSection>
      </FormContent>
    </>
  );
}
