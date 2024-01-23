export default function Navbar() {
    return (
        <nav className="flex h-[150px] w-full flex-col justify-between bg-purple-700 p-6 text-white">
            <div className="flex items-center gap-5 text-xl">
                <div className="flex-grow">
                    <i className="fa-regular fa-user rounded-full bg-purple-600 p-3"></i>
                </div>
                <i className="fa-regular fa-eye"></i>
                <i className="fa-regular fa-question"></i>
                <i className="fa-regular fa-envelope"></i>
            </div>
            <div>
                <h1 className="text-3xl">Olá, Felipe</h1>
            </div>
        </nav>
    )
}
