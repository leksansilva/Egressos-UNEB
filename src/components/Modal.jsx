import { Button } from "./Button";

export function Modal({ open, closeModal }) {
  return (
    true && (
      <div onClick={closeModal} className="relative z-10">
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 transition-opacity"></div>
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <div className="relative bg-brand-500  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
              <div className="bg-brand-500 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex flex-col">
                  <h1 className="text-white text-2xl font-semibold">
                    Adicionar foto:
                  </h1>
                  <label
                    htmlFor="inputImage"
                    className="h-[50vh] w-auto  border-dashed break-word p-20 text-white border-2 rounded-xl text-center outline-none appearance-none flex justify-center items-center"
                  >
                    Arraste e solte aqui a foto ou clique para adicionar
                    <input
                      className="hidden"
                      id="inputImage"
                      type="file"
                      accept="image/*"
                    />
                  </label>
                  <div className=" self-end mt-5">
                    <Button className="bg-green-400 hover:bg-green-500">
                      Salvar
                    </Button>
                    <Button className="bg-red-400 hover:bg-red-500 ml-5">
                      Cancelar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
