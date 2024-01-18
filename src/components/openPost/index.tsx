import { PostOpenStyled } from "./styled";
import { FaComment, FaHeart } from "react-icons/fa";

export const PostOpen = () => {

    return (
        <PostOpenStyled>
            <section className="postInfo">
                <img className="postImage" src="https://i.pinimg.com/564x/f5/05/47/f505479d79562adf0951b1fe5cb662ef.jpg" alt="Post image" />
                <div className="info">
                    <div className="profileInfo">
                        <img 
                        src="https://imagenswhatsapp.blog.br/wp-content/uploads/2021/10/fotos-para-perfil-whatsapp-gratis-564x500.jpg" 
                        alt="Foto de pergil" 
                        />
                        <div className="textInfo">
                            <h3>Ana Maria Silva</h3>
                            <span>22 de Março de 2023</span>
                        </div>
                    </div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                </div>
                <button className="closeButton" type="button">X</button>
            </section>
            <section className="comments">
                <div className="commentsInfo">
                    <span>
                        <FaComment className="icon"/>
                        <p>18</p>
                    </span>

                    <span>
                        <p>50</p>
                        <FaHeart className="icon"/>
                    </span>
                </div>
            </section>
        </PostOpenStyled>
    )
}