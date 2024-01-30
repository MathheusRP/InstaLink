import { ProfileButtomStyled } from "./styled";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const ProfileButton = () => {

    const [statusModal, setStatusModal] = useState<string>("displayOff")

    const setStatusModalFunction = () => {
        if(statusModal == "displayOff") {
            setStatusModal("displayOn")
        } else {
            setStatusModal("displayOff")
        }
    }

    const navigate = useNavigate()

    const navigateFunction = (section : string) => {
        navigate(section)
    }

    return (
        <ProfileButtomStyled>
            <img 
            src="https://imagenswhatsapp.blog.br/wp-content/uploads/2021/10/fotos-para-perfil-whatsapp-gratis-564x500.jpg" 
            alt="foto de perfil" 
            onClick={() => setStatusModalFunction()}
            />
            <div className={`profileMenu ${statusModal}`}>
                <nav>
                    <p onClick={() => navigateFunction("/profile")}>Perfil</p>
                    <p>Mensagens</p>
                    <p>Salvos</p>
                    <p>Seguindo</p>
                    <p>Configurações</p>
                </nav>
            </div>
        </ProfileButtomStyled>
    )
}