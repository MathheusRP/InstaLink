import { ProfileContentStyled } from "./styled";
import { useParams, Navigate, useNavigate} from "react-router-dom"
import { PostList } from "../postList";

export const ProfileContent = () => {
    const sectionNavigate = useNavigate()
    const {section, post} = useParams()

    const navigateFunction = (section: string) => {
        sectionNavigate(section)
    }

    return (
        <ProfileContentStyled>
            <div className="navigate">
                <p onClick={() => navigateFunction("/:profile")} className={section == null ? ("select") : ("")}>Posts</p>
                <p onClick={() => navigateFunction("/:profile/links")} className={section == "links" ? ("select") : ("")}>Links</p>
                <p onClick={() => navigateFunction("/:profile/sobre")} className={section == "sobre" ? ("select") : ("")}>Sobre</p>
            </div>

            {
            section == null ? (<PostList/>) 
            : 
            section == "links" ? (<h1></h1>) 
            : 
            section == "sobre" ? (<h1>sobre</h1>) 
            : 
            (<h1>{post}</h1>)}
            {/* (<h1><Navigate to={"/:profile"}/></h1>)} */}

        </ProfileContentStyled>
    )
}