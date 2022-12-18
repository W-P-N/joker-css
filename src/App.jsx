import * as Alerts from "./Components/Alert"
import * as Buttons from "./Components/Button"

const App = () => {
    return (
        <>

        <Alerts.AlertPrimary>Hello</Alerts.AlertPrimary>
        <Alerts.AlertDanger>Hello</Alerts.AlertDanger>
        <Alerts.AlertSuccess>Hello</Alerts.AlertSuccess>
        <Alerts.AlertWarning>Hello</Alerts.AlertWarning>

        <Buttons.ButtonPrimary>Button</Buttons.ButtonPrimary>
        <Buttons.ButtonWarning>Button</Buttons.ButtonWarning>
        <Buttons.ButtonDanger>Button</Buttons.ButtonDanger>
        <Buttons.ButtonSuccess>Button</Buttons.ButtonSuccess>
        <Buttons.ButtonDark>Button</Buttons.ButtonDark>

        </>
    )
}

export default App
