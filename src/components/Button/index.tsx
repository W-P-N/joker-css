interface Children {
    children: String | JSX.Element
}

export const ButtonPrimary = ({ children }: Children) => {
    return (
        <button className="bg-blue-700 hover:bg-blue-600 text-white p-2 rounded-md">
            { children }
        </button>
    )
}
