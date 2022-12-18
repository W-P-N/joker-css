import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import * as Alerts from "./components/Alert"
import * as Buttons from "./components/Button"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={ <Home/> }  />
            </ Routes>
            <Alerts.AlertPrimary>Hello</Alerts.AlertPrimary>
            <Alerts.AlertDanger>Hello</Alerts.AlertDanger>
            <Alerts.AlertSuccess>Hello</Alerts.AlertSuccess>
            <Alerts.AlertWarning>Hello</Alerts.AlertWarning>

            <Buttons.ButtonPrimary>Button</Buttons.ButtonPrimary>
            <Buttons.ButtonWarning>Button</Buttons.ButtonWarning>
            <Buttons.ButtonDanger>Button</Buttons.ButtonDanger>
            <Buttons.ButtonSuccess>Button</Buttons.ButtonSuccess>
            <Buttons.ButtonDark>Button</Buttons.ButtonDark>
            
        </BrowserRouter>
    )
}

export default App
