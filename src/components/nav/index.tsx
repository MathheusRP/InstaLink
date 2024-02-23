import { FaHome, FaBookmark } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { NavStyled } from "./styled";
import { AiFillMessage } from "react-icons/ai";

export const Nav = () => {

    return (
        <NavStyled>
            <p><input className="search" placeholder="Pesquisar"></input></p>
            <p><FaHome /> Home</p>
            <p><AiFillMessage /> Mensagens</p>
            <p><FaBookmark /> Salvos</p>
            <p><FaGear /> Ajuste</p>
        </NavStyled>
    )
}