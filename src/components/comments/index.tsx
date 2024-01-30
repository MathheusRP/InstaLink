import { SendCommentStyled, CommentsStyled } from "./styled";
import { FaComment, FaHeart } from "react-icons/fa";

export const SendComment = () => {

    return (
        <SendCommentStyled>
            <textarea name="comment" id="comment"/>

            <button type="button">COMENTAR</button>

        </SendCommentStyled>
    )
}

export const Comments = () => {

    return (
        <CommentsStyled>
            <li>
                <div className="commentOwner">
                    <div className="profileName">
                        <p>Maria Silva</p>

                    </div>
                    <img 
                    src="https://imagenswhatsapp.blog.br/wp-content/uploads/2021/10/fotos-para-perfil-whatsapp-gratis-564x500.jpg" 
                    alt="perfil 1" 
                    />
                   <span className="time">23 de Março de 2022</span>
                </div>
                
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
                <div className="interactions">
                    <span>
                        <FaComment className="icon"/>
                        <p>25</p>
                    </span>
                    <span>
                        <FaHeart className="icon"/>
                        <p>150</p>
                    </span>
                </div>
            </li>
            <li>
                <div className="commentOwner">
                    <div className="profileName">
                        <p>Maria Silva</p>

                    </div>
                    <img 
                    src="https://imagenswhatsapp.blog.br/wp-content/uploads/2021/10/fotos-para-perfil-whatsapp-gratis-564x500.jpg" 
                    alt="perfil 1" 
                    />
                   <span className="time">23 de Março de 2022</span>
                </div>
                
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
                <div className="interactions">
                    <span>
                        <FaComment className="icon"/>
                        <p>25</p>
                    </span>
                    <span>
                        <FaHeart className="icon"/>
                        <p>150</p>
                    </span>
                </div>
            </li>
            <li>
                <div className="commentOwner">
                    <div className="profileName">
                        <p>Maria Silva</p>

                    </div>
                    <img 
                    src="https://imagenswhatsapp.blog.br/wp-content/uploads/2021/10/fotos-para-perfil-whatsapp-gratis-564x500.jpg" 
                    alt="perfil 1" 
                    />
                   <span className="time">23 de Março de 2022</span>
                </div>
                
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
                <div className="interactions">
                    <span>
                        <FaComment className="icon"/>
                        <p>25</p>
                    </span>
                    <span>
                        <FaHeart className="icon"/>
                        <p>150</p>
                    </span>
                </div>
            </li>
        </CommentsStyled>
    )
}