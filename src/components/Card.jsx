import ImageExample from "../assets/example/example.png";

export function Card() {
  return (
    <div className="flex w-[38rem] rounded-lg h-56 shadow-xl">
      <div className="w-5/12 flex gap-2 flex-col bg-brand-500 rounded-l-lg">
        <div className="h-4/6">
          <img
            src={ImageExample}
            alt="foto da pessoa"
            className="h-[9rem] m-auto mt-2"
          />
        </div>
        <h1 className="h-1/6 font-semibold text-center text-white">
          Gabriel Pinheiro, ELA/DELA
        </h1>
        <h2 className="h-1/6 text-center  font-semibold text-white mb-3">
          Brasil, Alagoinhas - BA
        </h2>
      </div>
      <div className="flex p-5 gap-2 items-center flex-col w-7/12 bg-gradient-to-b from-zinc-200 to-white rounded-r-lg">
        <h1 className="h-1/6 font-semibold ">Atuação profissional</h1>
        <p className="h-4/6 break-all text-sm overflow-auto scrollbar ">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's
        </p>
        <button className="h-1/6 px-5 py-1 rounded-md font-semibold bg-brand-500 hover:bg-brand-700 text-white">
          Abrir Perfil
        </button>
      </div>
    </div>
  );
}
