import {Route, Routes} from "react-router-dom"
import { Profile } from "../pages/profile"
import { GlobalPageStyled } from "../styles/GlobalPageStyled"

export const PageRoutes = () => (
    <GlobalPageStyled>
        <Routes>
        <Route path="/" element={<h1>Oi</h1>}/>
        <Route path="/config" element={<h1>Oi</h1>}/>
        <Route path="/:profile/:section?/" element={<Profile/>}/>
        <Route path="/:profile/post/:post?" element={<Profile/>}/>

        </Routes>

    </GlobalPageStyled>

)


