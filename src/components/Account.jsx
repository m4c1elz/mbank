import Button from "./layout/Button"
import SideButton from "./layout/SideButton"

export default function Account() {
    return (
        <>
            <div className="flex items-start justify-between px-8 py-6">
                <div>
                    <h1 className="text-lg font-bold">Conta</h1>
                    <h2 className="text-xl">R$10,99</h2>
                </div>
                <div>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
            </div>
            <div className="flex items-center gap-4 overflow-x-scroll px-8 py-6">
                <Button faIcon="fa-brands fa-pix" text="Área Pix"></Button>
                <Button
                    faIcon="fa-regular fa-credit-card"
                    text="Pagar"
                ></Button>
                <Button
                    faIcon="fa-solid fa-money-bill-transfer"
                    text="Transferir"
                ></Button>
                <Button
                    faIcon="fa-solid fa-chevron-down"
                    text="Depositar"
                ></Button>
                <Button
                    faIcon="fa-solid fa-mobile"
                    text="Recarga de Celular"
                ></Button>
            </div>
            <SideButton faIcon="fa-solid fa-box" quantity="R$ 300,65">
                Caixinhas
            </SideButton>
            <SideButton faIcon="fa-solid fa-credit-card">
                Meus cartões
            </SideButton>
            <div className="mt-8 h-1 w-screen bg-purple-700"></div>
            <div className="flex flex-col justify-start p-4">
                <h1 className="ml-5">Acompanhe também</h1>
                <SideButton faIcon="fa-solid fa-money-bill">
                    Assistente de pagamentos
                </SideButton>
            </div>
            <div className="mt-8 h-1 w-screen bg-purple-700"></div>
        </>
    )
}
