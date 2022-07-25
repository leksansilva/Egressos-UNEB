import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { Button } from "../Button";
import { TextField } from "../TextField";
import { FormContent } from "./FormContent/FormContent";
import { FormSection } from "./FormContent/FormSection";
import { ModalImage } from "./FormContent/FormModal/ModalImage";
import { ModalExperience } from "./FormContent/FormModal/ModalExperience";
import { ModalEducation } from "./FormContent/FormModal/ModalEducation";

import CheckFile from "../../assets/icons/checkFile.svg";
import AddFile from "../../assets/icons/addFile.svg";
import Plus from "../../assets/icons/plus.svg";
import Check from "../../assets/icons/check.svg";
import { SelectField } from "../SelectField";

export function FinalForm() {
  const [values, onChange, optionsCourses] = useOutletContext();
  const [uploadPhoto, setUploadPhoto] = useState(false);
  const [openModalImage, setOpenModalImage] = useState(false);
  const [openModalEducation, setOpenModalEducation] = useState(false);
  const [openModalExperience, setOpenModalExperience] = useState(false);
  const [addExperience, setAddExperience] = useState(false);
  const [addEducation, setAddEducation] = useState(false);

  const handleUploadPhoto = (photo) => {
    setOpenModalImage(false);
    if (photo) {
      setUploadPhoto(true);
      const event = { target: { name: "photo", value: photo } };
      onChange(event);
    }
  };
  const handleSaveEducations = (educations) => {
    if (educations[0].describe !== "" && educations[0].initialYear !== "0") {
      setOpenModalEducation(false);
    } else {
      return;
    }

    if (
      educations.length > 0 &&
      educations[0].describe !== "" &&
      educations[0].initialYear !== "0"
    ) {
      setAddEducation(true);
      const event = { target: { name: "educations", value: educations } };
      onChange(event);
    } else {
      setAddEducation(false);
    }
  };

  const handleSaveExperiences = (experiences) => {
    if (experiences[0].describe !== "" && experiences[0].initialYear !== "0") {
      setOpenModalExperience(false);
    } else {
      return;
    }

    if (
      experiences.length > 0 &&
      experiences[0].describe !== "" &&
      experiences[0].initialYear !== "0"
    ) {
      setAddExperience(true);
      const event = { target: { name: "experiences", value: experiences } };
      onChange(event);
    } else {
      setAddExperience(false);
    }
  };

  const handleOpenModalImage = (cancel) => {
    setOpenModalImage(!openModalImage);
    if (cancel) {
      setUploadPhoto(false);
    }
  };

  const handleOpenModalEducation = () => {
    setOpenModalEducation(!openModalEducation);
  };
  const handleOpenModalExperience = () => {
    setOpenModalExperience(!openModalExperience);
  };

  return (
    <>
      <ModalImage
        open={openModalImage}
        handleUploadPhoto={handleUploadPhoto}
        closeModal={handleOpenModalImage}
      />
      <ModalExperience
        closeModal={handleOpenModalExperience}
        open={openModalExperience}
        handleSaveExperiences={handleSaveExperiences}
      />
      <ModalEducation
        closeModal={handleOpenModalEducation}
        open={openModalEducation}
        handleSaveEducations={handleSaveEducations}
      />
      <FormContent>
        <FormSection>
          <div className="w-full  lg:w-3/12">
            <h1 className="text-xl mb-2 truncate text-white">Foto:</h1>
            <Button
              onClick={handleOpenModalImage}
              endIcon
              icon={uploadPhoto ? CheckFile : AddFile}
              className={`border-2 rounded-2xl w-full ${
                uploadPhoto && "bg-green-400 hover:bg-green-500"
              } 
           `}
            >
              {uploadPhoto ? "Alterar" : "Carregar"}
            </Button>
          </div>

          <SelectField
            name="id_course"
            className="w-full  lg:w-4/12"
            describe="Curso Egresso"
            value={values.id_course}
            options={optionsCourses}
            onChange={onChange}
          />
          <TextField
            name="yearFinish"
            type="date"
            className="w-full  lg:w-4/12"
            describe="Ano de Conclusão"
            value={values.yearFinish}
            onChange={onChange}
          />

          <div className="w-full lg:w-4/6 flex flex-wrap gap-5">
            <div className="w-full lg:w-5/12">
              <h1 className="text-xl mb-2 truncate text-white">Educação:</h1>
              <Button
                onClick={handleOpenModalEducation}
                endIcon
                icon={addEducation ? Check : Plus}
                className={`border-2 rounded-2xl w-full  ${
                  addEducation && "bg-green-400 hover:bg-green-500"
                } 
           `}
              >
                {addEducation ? "Alterar" : "Carregar"}
              </Button>
            </div>
            <div className="w-full lg:w-5/12">
              <h1 className="text-xl mb-2 truncate text-white">
                Experiência Profissional:
              </h1>
              <Button
                onClick={handleOpenModalExperience}
                endIcon
                icon={addExperience ? Check : Plus}
                className={`border-2 rounded-2xl w-full  ${
                  addExperience && "bg-green-400 hover:bg-green-500"
                } 
           `}
              >
                {addExperience ? "Alterar" : "Carregar"}
              </Button>
            </div>
          </div>
        </FormSection>
        <FormSection>
          <TextField
            name="facebook"
            className="w-full  lg:w-5/12"
            describe="Facebook"
            value={values.facebook}
            onChange={onChange}
          />
          <TextField
            name="linkedin"
            className="w-full  lg:w-5/12"
            describe="LinkedIn"
            value={values.linkedin}
            onChange={onChange}
          />
          <TextField
            name="instagram"
            className="w-full  lg:w-5/12"
            describe="Instagram"
            value={values.instagram}
            onChange={onChange}
          />
          <TextField
            name="lattes"
            className="w-full  lg:w-5/12"
            describe="Currículo Lattes"
            value={values.lattes}
            onChange={onChange}
          />
        </FormSection>
      </FormContent>
    </>
  );
}
