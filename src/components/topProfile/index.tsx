import { TopProfileStyled } from "./styled";

export const TopProfile = () => {

    return (
        <TopProfileStyled>
            <img 
            src="https://preview.redd.it/floating-island-lofi-wallpaper-1920x1080-v0-glq653otf1na1.png?auto=webp&s=e193b8eba9fdf471144feef78e8a4e033b08b4fb" 
            alt="Capa de perfil"
            className="cover"
            />
            <img 
            src="https://imagenswhatsapp.blog.br/wp-content/uploads/2021/10/fotos-para-perfil-whatsapp-gratis-564x500.jpg" 
            alt="Foto de perfil" 
            className="profileImage"
            />
            <h3>Maria Silva</h3>
        </TopProfileStyled>
        
    )
}