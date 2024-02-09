import { PostOpenStyled } from "./styled";
// import { FaComment, FaHeart } from "react-icons/fa";
import { Comments } from "../comments";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userPostData, userData } from "../../data/user";

export const PostOpen = () => {
    const { postID } = useParams()

    const navigate = useNavigate()

    const [infoStatus, setInfoStatus] = useState<string>("open")
    const [infoAnimatio, setInfoAnimatio] = useState<string>("up")
    const [commentsStatus, setCommentsStatus] = useState<string>("closeComments")

    const infoStatusFunction = () => {
        if(infoStatus == "open"){
            setInfoAnimatio("down")
        } else {
            setInfoAnimatio("up")
            setInfoStatus("open")
        }

        setTimeout (() => {
            if(infoStatus == "open") {
                setInfoStatus("close")
            }
        }, 900)
    }

    const commentsStatusFunction = () => {

        if(commentsStatus == "openComments") {
            setCommentsStatus("closeComments")
        } else {
            setCommentsStatus("openComments")
        }
    }

    const [userPost, setUserPost] = useState<any | undefined>(undefined)


    useEffect(() => {
        const findPost = userPostData.filter((post) => {
            if(post.postID == postID){
                return post
            }
        })
        setUserPost(findPost[0])
    }, [postID])

    return (
        <PostOpenStyled >
            <span onClick={() => navigate(-1)} className={`closeButton ${infoStatus} ${infoAnimatio}`}>X</span>
            <ul onClick={() => infoStatusFunction()} className="imageContainer">

                {
                    userPost != undefined ? (
                        userPost.postImgs.map((imgs: any) => {
                            return (
                                <li key={imgs.imgID}>
                                    <img src={imgs.img} alt="post" />
                                </li>
                            )
                        })

                       
                    ) : (
                        <h1>Caregando</h1>
                    )
                }

                {/* <li>
                    <img src="https://i.pinimg.com/564x/f4/49/54/f44954450fadfc4a746709d22c9071c8.jpg" alt="post" />
                </li> */}
                {/* <li>
                    <img src="https://i.pinimg.com/564x/e9/6f/38/e96f38df715eaaa25e07758db39a753a.jpg" alt="post" />
                </li> */}
                {/* <li>
                    <img src="https://i.pinimg.com/564x/27/b5/ab/27b5abd9c2b990325c3e400528c97dc9.jpg" alt="post" />
                </li> */}
            </ul>
            {
                userPost != undefined ? (
                    <section className={`postInfo ${infoStatus} ${infoAnimatio} ${commentsStatus}`}>
                <div className="postInfoContainer">
                    <div className="ownerProfile">
                        <span className="info">
                            <img 
                                src={userPost.ownerImg} 
                                alt="Owner profile" 
                            />
                            <div>
                                <h3>{userPost.ownerName}</h3>
                                <span className="time">{userPost.time}</span>
                            </div>
                        </span>
                    </div>
                    <div className="ownerComment">
                        <p>{userPost.ownerComment}</p>
                    </div>
                    <span className="likeAndCommentInfo">
                        <p>{userPost.numberLikes} Curtidas</p>
                        <p onClick={() => commentsStatusFunction()}>Ver todos os {userPost.numberComment} comentários</p>
                    </span>
                </div>
                <Comments commentsStatus={commentsStatus}/>
            </section>
                ) : (
                    <></>
                )
            }
        </PostOpenStyled>
    )
}