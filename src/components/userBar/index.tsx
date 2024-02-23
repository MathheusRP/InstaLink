import { UserBarStyled } from "./styled";
import { FaHome, FaSearch } from "react-icons/fa";
import { MdOutlineAddBox } from "react-icons/md";
import { ProfileButton } from "../profileButton";
import { Link } from "react-router-dom";

export const UserBar = () => {

    return (
        <UserBarStyled className="userBar">
            <div className="bar">
                <FaSearch className="iconBar"/>
                <MdOutlineAddBox className="iconBar"/>
                <Link to={"/"}><FaHome className="iconBar"/></Link>
                <ProfileButton/>
            </div>
        </UserBarStyled>
        
    )
}