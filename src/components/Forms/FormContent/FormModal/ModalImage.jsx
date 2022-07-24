import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import Resize from "../../../../utils/Resize";

import { Button } from "../../../Button";
import { Modal } from "./Modal";

export function ModalImage({ open, closeModal, handleUploadPhoto }) {
  const [blobImage, setBlobImage] = useState("");

  const onDrop = useCallback(async (AcepptFile) => {
    const file = await AcepptFile;
    const reader = new FileReader();
    const image = await Resize(file[0]);

    reader.readAsDataURL(image);
    reader.onload = async () => {
      setBlobImage(reader.result);
    };
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleClickSaveImage = () => {
    handleUploadPhoto(blobImage);
  };

  const handleCancel = () => {
    closeModal();
    setBlobImage("");
  };

  return (
    <Modal size="sm" open={open} closeModal={closeModal}>
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-white text-2xl font-semibold">Adicionar foto:</h1>
        <label
          {...getRootProps()}
          htmlFor="inputImage"
          style={{ backgroundImage: `url(${blobImage})` }}
          className="h-[167px] w-[127px] bg-no-repeat bg-cover border-dashed break-word p-20 text-white border-2 rounded-xl text-center outline-none appearance-none flex justify-center items-center"
        >
          {isDragActive ? (
            "Solte Aqui"
          ) : blobImage ? (
            <p className="justify-self-end">Alterar</p>
          ) : (
            "Arraste sua foto ou clique para adicionar"
          )}
          <input
            disabled
            className="hidden"
            id="inputImage"
            type="file"
            accept="image/*"
            {...getInputProps()}
          />
        </label>
        <div className="mt-5">
          <Button
            onClick={handleClickSaveImage}
            className="bg-green-400 hover:bg-green-500"
          >
            Salvar
          </Button>
          <Button
            onClick={handleCancel}
            className="bg-red-400 hover:bg-red-500 ml-5"
          >
            Cancelar
          </Button>
        </div>
      </div>
    </Modal>
  );
}
