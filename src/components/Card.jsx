import ImageExample from "../assets/example/example.png";
import { Button } from "./Button";

export function Card() {
  return (
    <div className="flex w-[32rem] rounded-lg h-56 shadow-xl">
      <div className="w-5/12 flex gap-2 flex-col bg-brand-500 rounded-l-lg">
        <div className="h-4/6">
          <img
            src={ImageExample}
            alt="foto da pessoa"
            className="h-[9rem] m-auto mt-2"
          />
        </div>
        <h1 className="text-[14px] font-semibold text-center text-white">
          Gabriela Pinheiro, ELA/DELA
        </h1>
        <h1 className="text-center text-[14px] font-semibold text-white mb-3">
          Brasil, Alagoinhas - BA
        </h1>
      </div>
      <div className="flex p-5 gap-2 items-center flex-col w-7/12 bg-gradient-to-b from-zinc-200 to-white rounded-r-lg">
        <h1 className="h-1/6 font-semibold ">Atuação profissional</h1>
        <p className="h-4/6 break-all text-sm overflow-auto scrollbar ">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's
        </p>
        <Button>Abrir Perfil</Button>
      </div>
    </div>
  );
}
