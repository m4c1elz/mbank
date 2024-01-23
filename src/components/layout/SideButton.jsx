export default function SideButton(props) {
    return (
        <div className="m-auto mt-4 flex w-11/12 items-center justify-between rounded-xl bg-gray-300 p-4 font-bold text-black">
            <section className="flex items-center gap-4">
                <i className={`${props.faIcon} `}></i>
                <p>{props.children}</p>
            </section>
            <p>{props.quantity}</p>
        </div>
    )
}
