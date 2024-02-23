import { ProfileAboutStyled } from "./styled";

export const ProfileAbout = () => {

    return (
        <ProfileAboutStyled>
            <p className="text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
            <ul>
                <li>
                    <span>Nome</span>
                    <p>Ana Maria</p>
                </li>
                <li>
                    <span>Idade</span>
                    <p>22</p>
                </li>
                <li>
                    <span>Trabalho</span>
                    <p>Empresa - Youtube</p>
                </li>
                <li>
                    <span>Telefone</span>
                    <p>tel 1: (11) 4242-3232</p>
                    <p>tel 2: (11) 3232-4242</p>
                </li>
                <li>
                    <span>Cidade</span>
                    <p>São Paulo</p>
                </li>
            </ul>
        </ProfileAboutStyled>
    )
}