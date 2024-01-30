import { ProfileStyled } from "./styled"
import { TopProfile } from "../../components/topProfile"
import { ProfileContent } from "../../components/profileContent"
import { UserBar } from "../../components/userBar"

export const Profile = () => {

    return (
        <ProfileStyled>
            
            <TopProfile/>
            <ProfileContent/>
            <UserBar/>
        </ProfileStyled>
    )
}