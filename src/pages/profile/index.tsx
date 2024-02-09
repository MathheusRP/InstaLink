import { ProfileStyled } from "./styled"
import { TopProfile } from "../../components/topProfile"
import { ProfileContent } from "../../components/profileContent"
import { UserBar } from "../../components/userBar"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { userData } from "../../data/user"

export const Profile = () => {
    const {profileID} = useParams()
    const [profile, setProfile] = useState<any>({})

    const navigate = useNavigate()

    useEffect(() => {
        const findUser = userData.filter((user) => {
            if(user.userID == profileID){
                return user
            }
        })

        if(findUser.length == 0) {
            navigate("/")
        } else {
            setProfile(findUser[0])
        }

    }, [profileID])

    return (
        <ProfileStyled>
            {
                profile.userID != undefined ? (
                    <>
                        <TopProfile userCover={profile.cover} userImg={profile.img} userName={profile.name}/>
                        <ProfileContent userID={profile.userID}/>
                        <UserBar/>
                    </>
                ) : (
                    <><h1>teste</h1></>
                )
            }
            
        </ProfileStyled>
    )
}