import DiscoverOption from "./layout/DiscoverOption"

export default function Discover() {
    return (
        <div className="flex flex-col gap-4 p-4">
            <h1>Descubra mais</h1>
            <div className="flex gap-4 overflow-x-scroll">
                <DiscoverOption
                    imgSrc="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="Indique o Nu para amigos"
                    content="Espalhe como é simples estar no controle."
                    button="Indicar amigos"
                />
                <DiscoverOption
                    imgSrc="https://images.unsplash.com/photo-1616077168712-fc6c788db4af?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="Portabilidade de salário"
                    content="Liberdade é escolher onde receber seu dinheiro."
                    button="Conhecer"
                />
                <DiscoverOption
                    imgSrc="https://images.unsplash.com/photo-1632435499152-18838be77960?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="Whatsapp"
                    content="Pagamentos seguros, rápidos e sem tarifa."
                    button="Quero conhecer"
                />
            </div>
        </div>
    )
}
