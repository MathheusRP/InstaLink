import { ProfileContentStyled } from "./styled";
import { PostList } from "../postList";
import { UserContext } from "../../context/useContext";
import { useContext } from "react";
import { ListLink } from "../listLinks";
import { ProfileAbout } from "../profileAbout";

export const ProfileContent = ({userID}: any) => {
    const {profileSection, setProfileSection} = useContext(UserContext)

    return (
        <ProfileContentStyled>
            <div className="navigate">
                <p onClick={() => setProfileSection(undefined)} className={profileSection == undefined ? ("select") : ("")}>Posts</p>
                <p onClick={() => setProfileSection("links")} className={profileSection == "links" ? ("select") : ("")}>Links</p>
                <p onClick={() => setProfileSection("sobre")} className={profileSection == "sobre" ? ("select") : ("")}>Sobre</p>
            </div>

            {
            profileSection == undefined ? (<PostList userID={userID}/>) 
            : 
            profileSection == "links" ? (<ListLink/>) 
            : 
            profileSection == "sobre" ? (<ProfileAbout/>) 
            : 
            (<></>)}

        </ProfileContentStyled>
    )
}