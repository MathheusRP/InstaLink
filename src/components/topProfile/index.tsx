import { TopProfileStyled } from "./styled";

export const TopProfile = ({userCover, userImg, userName}: any) => {

    return (
        <TopProfileStyled>
            <img 
            src= {userCover} 
            alt="Capa de perfil"
            className="cover"
            />
            <img 
            src={userImg} 
            alt="Foto de perfil" 
            className="profileImage"
            />
            <h3>{userName}</h3>
        </TopProfileStyled>
    )
}