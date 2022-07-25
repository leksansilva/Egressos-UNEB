import { RiFacebookBoxFill, RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri";

export function Others() {
    return (
        <section className="p-6">
            <div>
                <h2 className="text-xl font-semibold">Redes Sociais</h2>
                <hr className="border-2 border-sky-500 mb-3"/>
                <div className="ml-5">
                    <div className="flex mb-3">
                        <RiFacebookBoxFill color="#3b5998" size={25}/>
                        <p className="ml-3">Nome do Perfil</p>
                    </div>
                    <div className="flex mb-3">
                        <RiInstagramFill color="#FD1D1D" size={25}/>
                        <p className="ml-3">@nome_do_perfil</p>
                    </div>
                    <div className="flex mb-3">
                        <RiLinkedinBoxFill color="#0072b1" size={25}/>
                        <p className="ml-3">Nome do Perfil</p>
                    </div>
                </div>
            </div>
        </section>
    )
}