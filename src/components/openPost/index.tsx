import { PostOpenStyled } from "./styled";
import { FaComment, FaHeart } from "react-icons/fa";
import { SendComment, Comments } from "../comments";
import { useState } from "react";

export const PostOpen = () => {

    const [infoStatus, setInfoStatus] = useState<string>("open")
    const [infoAnimatio, setInfoAnimatio] = useState<string>("up")

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

    return (
        <PostOpenStyled >
           <ul onClick={() => infoStatusFunction()} className="imageContainer">
                <li>
                    <img src="https://i.pinimg.com/564x/f4/49/54/f44954450fadfc4a746709d22c9071c8.jpg" alt="post" />
                </li>
                <li>
                    <img src="https://i.pinimg.com/564x/e9/6f/38/e96f38df715eaaa25e07758db39a753a.jpg" alt="post" />
                </li>
                <li>
                    <img src="https://i.pinimg.com/564x/27/b5/ab/27b5abd9c2b990325c3e400528c97dc9.jpg" alt="post" />
                </li>
           </ul>
           <section className={`postInfo ${infoStatus} ${infoAnimatio}`}>
                <div className="ownerProfile">
                    <span className="info">
                        <img 
                            src="https://imagenswhatsapp.blog.br/wp-content/uploads/2021/10/fotos-para-perfil-whatsapp-gratis-564x500.jpg" 
                            alt="Owner profile" 
                        />
                        <div>
                            <h3>Maria Silva</h3>
                            <span className="time">23 de Março de 2023</span>
                        </div>
                    </span>
                </div>
                <div className="postComment">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        
                    </p>
                </div>
                <span className="likeAndCommentInfo">
                    <p>99 Curtidas</p>
                    <p>Ver todos os 23 comentários</p>
                </span>
           </section>
        </PostOpenStyled>
    )
}