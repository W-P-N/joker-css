const AlertPrimary = () => {
    return (
        <div className="bg-blue-100 p-4 text-blue-800">
            A simple primary alert—check it out!
        </div>
    )
}

const AlertDanger = () => {
    return (
        <div className="bg-red-100 p-4 text-red-800">
            A simple danger alert—check it out!
        </div>
    )
}

const AlertSuccess = () => {
    return (
        <div className="bg-green-100 p-4 text-green-800">
            A simple success alert—check it out!
        </div>
    )
}

const AlertWarning = () => {
    return (
        <div className="bg-yellow-100 p-4 text-yellow-800">
            A simple warning alert—check it out!
        </div>
    )
}

export { 
    AlertPrimary, 
    AlertDanger, 
    AlertSuccess ,
    AlertWarning
}
