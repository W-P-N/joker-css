export const AlertPrimary = ({ children }) => {
    return (
        <div className="bg-blue-100 p-4 text-blue-800">
            { children }
        </div>
    )
}

export const AlertDanger = ({ children }) => {
    return (
        <div className="bg-red-100 p-4 text-red-800">
            { children }
        </div>
    )
}

export const AlertSuccess = ({ children }) => {
    return (
        <div className="bg-green-100 p-4 text-green-800">
            { children }
        </div>
    )
}

export const AlertWarning = ({ children }) => {
    return (
        <div className="bg-yellow-100 p-4 text-yellow-800">
            { children }
        </div>
    )
}
