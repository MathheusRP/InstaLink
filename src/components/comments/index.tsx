import { SendCommentStyled, CommentsStyled } from "./styled";
import { FaHeart } from "react-icons/fa";

export const SendComment = () => {

    return (
        <SendCommentStyled>

        </SendCommentStyled>
    )
}

export const Comments = ({commentsStatus}: any) => {

    return (
        <CommentsStyled className={`${commentsStatus}`}>
            <li>
                <div className="CommentOwnerInfo">
                    <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxOBoXQxLHY4Tou4jK4wutobg4Lbw4SQJhSQ&usqp=CAU" 
                    alt="Foto do comentario 1" 
                    />
                    <span>
                        <p>João Vitor</p>
                    </span>
                </div>
                <span className="time"> 23 de Março de 2023</span>
                <p className="text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s  
                </p>
                <span className="numberOf comments">10 Comentarios</span>
                <span className="numberOf likers"><FaHeart className="iconLike"/> 10</span>
            </li>
            <li>
                <div className="CommentOwnerInfo">
                    <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxOBoXQxLHY4Tou4jK4wutobg4Lbw4SQJhSQ&usqp=CAU" 
                    alt="Foto do comentario 1" 
                    />
                    <span>
                        <p>João Vitor</p>
                    </span>
                </div>
                <span className="time"> 23 de Março de 2023</span>
                <p className="text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s  
                </p>
                <span className="numberOf comments">10 Comentarios</span>
                <span className="numberOf likers"><FaHeart className="iconLike"/> 10</span>
            </li>
            <li>
                <div className="CommentOwnerInfo">
                    <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxOBoXQxLHY4Tou4jK4wutobg4Lbw4SQJhSQ&usqp=CAU" 
                    alt="Foto do comentario 1" 
                    />
                    <span>
                        <p>João Vitor</p>
                    </span>
                </div>
                <span className="time"> 23 de Março de 2023</span>
                <p className="text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s  
                </p>
                <span className="numberOf comments">10 Comentarios</span>
                <span className="numberOf likers"><FaHeart className="iconLike"/> 10</span>
            </li>
            <li>
                <div className="CommentOwnerInfo">
                    <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxOBoXQxLHY4Tou4jK4wutobg4Lbw4SQJhSQ&usqp=CAU" 
                    alt="Foto do comentario 1" 
                    />
                    <span>
                        <p>João Vitor</p>
                    </span>
                </div>
                <span className="time"> 23 de Março de 2023</span>
                <p className="text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s  
                </p>
                <span className="numberOf comments">10 Comentarios</span>
                <span className="numberOf likers"><FaHeart className="iconLike"/> 10</span>
            </li>
        </CommentsStyled>
    )
}