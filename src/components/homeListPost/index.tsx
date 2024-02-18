import { HomePostListStyled } from "./styled";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";
import { userPostData } from "../../data/user";

export const HomePostList = () => {

    return (
        <HomePostListStyled>
            <ul>

                {
                   userPostData.map((post, index) => (
                    <li key={index}>
                        <Link className="postOwnerProfile" to={post.ownerID}>
                        <img src={post.ownerImg} alt="foto de perfil" />
                        <span className="name">{post.ownerName}</span>
                        </Link>
                        <TiThMenu className="icon" />
                        <figure>
                            <Link className="imgLink" to={`/p/${post.postID}`}>
                                <img src={post.postImgs[0].img} alt="post" />
                            </Link>
                        </figure>
                        <div className="postButtons">
                            <FaHeart className="likeIcon"/>
                            <span>
                                <p><b>{post.numberLikes}</b> Curtidas</p>
                                <p>Ver todos os <b>{post.numberComment} comentarios</b></p>
                            </span>
                        </div>
                    </li>
                   )) 
                }
            </ul>
        </HomePostListStyled>
    )
}