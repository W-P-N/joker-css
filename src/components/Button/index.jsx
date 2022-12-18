export const ButtonPrimary = ({ children }) => {
    return (
        <button className="bg-blue-700 text-sm px-3 py-2 rounded text-white">
            { children }
        </button>
    )
}

export const ButtonDanger = ({ children }) => {
    return (
        <button className="bg-red-700 text-sm px-3 py-2 rounded text-white">
            { children }
        </button>
    )
}

export const ButtonSuccess = ({ children }) => {
    return (
        <button className="bg-green-700 text-sm px-3 py-2 rounded text-white">
            { children }
        </button>
    )
}

export const ButtonWarning = ({ children }) => {
    return (
        <button className="bg-yellow-700 text-sm px-3 py-2 rounded text-white">
            { children }
        </button>
    )
}

export const ButtonDark = ({ children }) => {
    return(
        <button className="bg-gray-700 text-sm px-3 py-2 rounded text-white">
            { children }
        </button>
    )
}
