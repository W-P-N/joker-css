import { AlertDanger, AlertPrimary, AlertSuccess, AlertWarning } from "./Components/Alert"
import { ButtonDanger, ButtonPrimary, ButtonSuccess, ButtonWarning } from "./Components/Button"

const App = () => {
    return (
        <>
        <AlertPrimary/>
        <AlertDanger/>
        <AlertSuccess/>
        <AlertWarning/>
        <ButtonPrimary/>
        <ButtonDanger/>
        <ButtonSuccess/>
        <ButtonWarning/>
        </>
    )
}

export default App
