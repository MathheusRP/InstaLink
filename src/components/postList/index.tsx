import { PostListStyled } from "./styled";
import { PiGridFourFill } from "react-icons/pi";
import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { PostOpen } from "../openPost";
import { useParams, Link } from "react-router-dom";
import { userPostData } from "../../data/user";

export const PostList = ({userID}: any) => {

    const {post} = useParams()
    const [display, setDisplay] = useState<string>("display3")
    const [modal, setModal] = useState<string>("modalOff")

    const setDisplayFunction = (displaySelect: string) => {
        setDisplay(displaySelect)
        setModal("modalOff")
    }

    const setModalFunction = () => {
        if(modal == "modalOff") {
            setModal("modalOn")
        } else {
            setModal("modalOff")
        }
    }

    const container = useRef<any>(null)
    const [imgwidth, setImageWidth] = useState<number>()

    useLayoutEffect(() => {
        setImageWidth(container.current.clientWidth)

        function handleWindowResize() {
            setImageWidth(container.current.clientWidth)
        }

        window.addEventListener('resize', handleWindowResize);

    }, [display])

    const [postList, setPostList] = useState<any>([])

    useEffect(() => {
        const findUserPostList = userPostData.filter((post) => {
            if(post.ownerID == userID){
                return post
            }
        })
        setPostList(findUserPostList)
    }, [userID])

    return (

        <PostListStyled widthimage={imgwidth}> 
            <ul  className={`postList ${display}`}>

            {
                postList.length > 0 ? 
                (
                    postList.map((post: any, index: number) => {
                        if(index == 0){
                            return (
                                <Link key={post.postImgs[0].imgID} to={`p/${post.postID}`}>
                                    <li ref={container}>
                                        <img src={post.postImgs[0].img} alt="post 1" />
                                    </li>
                                </Link>
                            )
                        }

                        return (
                            <Link key={post.postImgs[0].imgID} to={`p/${post.postID}`}>
                                <li>
                                    <img src={post.postImgs[0].img} alt="post 1" />
                                </li>
                            </Link>
                        )
                    })
                ) 
                : 
                (
                <><li ref={container}></li></>
                )
            }      
            </ul>
            
            {
                post != null ? (<PostOpen/>) : <></>
            }

            <div className="setDiplsyButton">
                <PiGridFourFill className="icon" onClick={() => setModalFunction()}/>

                <div className={`closeModal ${modal}`} onClick={() => setModal("modalOff")}></div>

                <div className={`setDisplayModal ${modal}`}>
                    <p onClick={() => setDisplayFunction("")}>Pequeno</p>
                    <p onClick={() => setDisplayFunction("display2")}>Médio</p>
                    <p onClick={() => setDisplayFunction("display3")}>Grande</p>
                </div>
            </div>
                
        </PostListStyled>
    )
}