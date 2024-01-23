export default function Button({ faIcon, text }) {
    return (
        <div className="flex cursor-pointer flex-col items-center gap-4">
            <i
                className={
                    `${faIcon}` +
                    " h-[70px] w-[70px] rounded-full bg-gray-300 p-4 text-center text-3xl text-black"
                }
            ></i>
            <p className="line-clamp-1 text-center">{text}</p>
        </div>
    )
}
