import {Route, Routes} from "react-router-dom"
import { Profile } from "../pages/profile"
import { GlobalPageStyled } from "../styles/GlobalPageStyled"

export const PageRoutes = () => (
    <GlobalPageStyled>
        <Routes>
        <Route path="/" element={<h1>Oi</h1>}/>
        <Route path="/profile/:section?" element={<Profile/>}/>

        

        </Routes>

    </GlobalPageStyled>

)


