import { AlertDanger, AlertPrimary, AlertSuccess, AlertWarning } from "./Components/Alert"
import { ButtonPrimary } from "./Components/Button"

const App = () => {
    return (
        <>
        <AlertPrimary/>
        <AlertDanger/>
        <AlertSuccess/>
        <AlertWarning/>
        <ButtonPrimary/>
        </>
    )
}

export default App
