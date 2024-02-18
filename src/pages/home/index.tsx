import { HomeStyled } from "./styled"
import { Nav } from "../../components/nav"
import { FriendsList } from "../../components/friendsList"
import { UserBar } from "../../components/userBar"
import { HomePostList } from "../../components/homeListPost"


export const Home = () => {

    return (
        <HomeStyled>
            <Nav/>
            <HomePostList/>
            <FriendsList/>
            <UserBar/>
        </HomeStyled>


    )
}
