export default function DiscoverOption({ imgSrc, title, content, button }) {
    return (
        <div className="h-72 w-72 flex-shrink-0 overflow-hidden rounded-xl bg-gray-200">
            <section className="flex h-2/5 w-full items-center justify-center overflow-hidden">
                <img src={imgSrc} alt="" className="w-full" />
            </section>
            <section className="flex h-3/5 flex-grow flex-col items-start justify-between p-4">
                <h1 className="text-sm font-bold">{title}</h1>
                <p className="text-sm">{content}</p>
                <button className="text-md rounded-full bg-purple-700 px-4 py-2 font-bold text-white">
                    {button}
                </button>
            </section>
        </div>
    )
}
