import { ProfileContentStyled } from "./styled";
import { useParams, useNavigate} from "react-router-dom"
import { PostList } from "../postList";

export const ProfileContent = ({userID}: any) => {
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
            section == null ? (<PostList userID={userID}/>) 
            : 
            section == "links" ? (<h1>link</h1>) 
            : 
            section == "sobre" ? (<h1>sobre</h1>) 
            : 
            (<h1>{post}</h1>)}

        </ProfileContentStyled>
    )
}