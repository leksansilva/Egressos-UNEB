import { Header } from "../components/Profile/Header";
import { Historic } from "../components/Profile/Historic";
import { Others } from "../components/Profile/Others";
import { Button } from "../components/Button";

import logo from "../assets/logo/uneb.svg";
import arrowLeft from "../assets/icons/arrowLeft.svg";

export function SearchProfile() {
    return (
    <>
        <div className="my-5 flex justify-center">
            <img src={logo} alt="Logo da Universidade"/>
        </div>
        <div className="mx-3 m-auto bg-zinc-200 rounded-3xl flex-col justify-between">
            <Header/>
            <div className="bg-blue-500 px-6 py-3">
                <h2 className="text-white font-bold text-2xl">Histórico</h2>
            </div>
            <Historic/>
            <div className="bg-blue-500 px-6 py-3">
                <h2 className="text-white font-bold text-2xl">Outros</h2>
            </div>
            <Others/>
        </div>
        <div className="flex justify-center">
            <Button className="my-10 rounded-lg" icon={arrowLeft}>Voltar</Button>
        </div>
    </>
    )
}