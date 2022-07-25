import pessoa from "../../assets/example/example.png";

export function Header() {
    return (
        <header className="p-6">
            <div className="flex">
                <img src={pessoa} alt="Foto do Usuário" className="mr-4"/>
                <div>
                    <p className="font-bold">Id: 345654</p>
                    <h2 className="text-2xl font-bold">Gabriela Pinheiro</h2>
                    <h3 className="text-base font-bold">ELA/DELA</h3>
                    <p>Engenheira de Software</p>
                    <p className="mt-4">Ultima atualização: DD/MM/AAAA</p>
                </div>
            </div>
            <div className="mt-5 text-justify">
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. It was popularised in 
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including 
                    versions of Lorem Ipsum.
                </p>
            </div>
        </header>
    )
}