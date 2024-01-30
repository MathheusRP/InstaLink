import { UserBarStyled } from "./styled";
import { FaHome, FaSearch } from "react-icons/fa";
import { MdOutlineAddBox } from "react-icons/md";
import { ProfileButton } from "../profileButton";

export const UserBar = () => {

    return (
        <UserBarStyled>
            <div className="bar">
                <FaSearch className="iconBar"/>
                <MdOutlineAddBox className="iconBar"/>
                <FaHome className="iconBar"/>
                <ProfileButton/>
            </div>
        </UserBarStyled>
        
    )
}