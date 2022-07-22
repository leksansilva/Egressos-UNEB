export function Loading({ screen }) {
  return (
    <div
      className={`flex justify-center items-center ${
        screen ? "w-[100vw] h-[100vh]" : "w-full h-full"
      }`}
    >
      <div className="w-72 h-72 bg-no-repeat bg-egressos-default-blue bg-center animate-pulse ">
        <div className=" w-full h-full  bg-arrow-circle-blue bg-no-repeat bg-center -animate-spin"></div>
      </div>
    </div>
  );
}
