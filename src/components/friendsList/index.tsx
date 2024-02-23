import { FriendsListStyled } from "./styled";
import { Link } from "react-router-dom";

export const FriendsList = () => {

    return (
        <FriendsListStyled>
            <div className="myProfile">
                <Link to={"/maria_silva"}>
                    <img className="myPhoto" src="https://imagenswhatsapp.blog.br/wp-content/uploads/2021/10/fotos-para-perfil-whatsapp-gratis-564x500.jpg" alt="Meu perfil" />
                    <span className="myName">Maria Silva</span>
                </Link>

                <ul>
                    <span>Seguindo</span>
                    <li>
                        <Link to={"/joao_carlos"}>
                            <img src="https://i.pinimg.com/564x/b7/24/45/b724454822463c7f7a1f78b3d9f56242.jpg" alt="Friend image" />
                            <span>João Carlos</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/larissa_luiza"}>
                            <img src="https://i.pinimg.com/564x/4c/03/71/4c0371654e8014a193bb682dbaf568ec.jpg" alt="Friend image" />
                            <span>Larissa Luiza</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/carlos111"}>
                            <img src="https://i.pinimg.com/564x/6e/53/3d/6e533da6cdacc748f2f7280ec0017cb4.jpg" alt="Friend image" />
                            <span>Carlos Eduardo</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/ana_julia"}>
                            <img src="https://i.pinimg.com/564x/52/b4/e7/52b4e7692ae99ccd5fc76d0fe1948de3.jpg" alt="Friend image" />
                            <span>Ana Julia</span>
                        </Link>
                    </li>
                    <span>Mais</span>
                </ul>
            </div>
        </FriendsListStyled>
    )
}