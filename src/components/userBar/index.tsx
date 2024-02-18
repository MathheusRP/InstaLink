import { UserBarStyled } from "./styled";
import { FaHome, FaSearch } from "react-icons/fa";
import { MdOutlineAddBox } from "react-icons/md";
import { ProfileButton } from "../profileButton";

export const UserBar = () => {

    return (
        <UserBarStyled className="userBar">
            <div className="bar">
                <FaSearch className="iconBar"/>
                <MdOutlineAddBox className="iconBar"/>
                <FaHome className="iconBar"/>
                <ProfileButton/>
            </div>
        </UserBarStyled>
        
    )
}