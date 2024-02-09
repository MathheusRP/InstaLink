import {Route, Routes} from "react-router-dom"
import { Profile } from "../pages/profile"
import { GlobalPageStyled } from "../styles/GlobalPageStyled"
import { PostOpen } from "../components/openPost"

export const PageRoutes = () => (
    <GlobalPageStyled>
        <Routes>
        <Route path="/" element={<h1>Oi</h1>}/>
        <Route path="/config" element={<h1>Oi</h1>}/>
        <Route path="/:profileID/:section?/" element={<Profile/>}/>
        <Route path="/:profileID/p/:postID?" element={<PostOpen/>}/>

        </Routes>

    </GlobalPageStyled>

)


