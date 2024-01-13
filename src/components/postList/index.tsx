import { PostListStyled } from "./styled";
import { PiGridFourFill } from "react-icons/pi";
import { useState } from "react";

export const PostList = () => {

    const [display, setDisplay] = useState<string>("")
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

    return (
        <PostListStyled>
            
            <ul className={`${display}`}>
                <li>
                    <img src="https://i.pinimg.com/564x/f5/05/47/f505479d79562adf0951b1fe5cb662ef.jpg" alt="post 1" />
                </li>
                <li>
                    <img src="https://i.pinimg.com/564x/f5/05/47/f505479d79562adf0951b1fe5cb662ef.jpg" alt="post 1" />
                </li>
                <li>
                    <img src="https://i.pinimg.com/564x/f5/05/47/f505479d79562adf0951b1fe5cb662ef.jpg" alt="post 1" />
                </li>
                <li>
                    <img src="https://i.pinimg.com/564x/f5/05/47/f505479d79562adf0951b1fe5cb662ef.jpg" alt="post 1" />
                </li>
                <li>
                    <img src="https://i.pinimg.com/564x/f5/05/47/f505479d79562adf0951b1fe5cb662ef.jpg" alt="post 1" />
                </li>
                <li>
                    <img src="https://i.pinimg.com/564x/f5/05/47/f505479d79562adf0951b1fe5cb662ef.jpg" alt="post 1" />
                </li>
                <li>
                    <img src="https://i.pinimg.com/564x/f5/05/47/f505479d79562adf0951b1fe5cb662ef.jpg" alt="post 1" />
                </li>
                {/* <li>
                    <img src="https://i.pinimg.com/564x/f5/05/47/f505479d79562adf0951b1fe5cb662ef.jpg" alt="post 1" />
                </li>
                <li>
                    <img src="https://i.pinimg.com/564x/f5/05/47/f505479d79562adf0951b1fe5cb662ef.jpg" alt="post 1" />
                </li>
                <li>
                    <img src="https://i.pinimg.com/564x/f5/05/47/f505479d79562adf0951b1fe5cb662ef.jpg" alt="post 1" />
                </li>
                <li>
                    <img src="https://i.pinimg.com/564x/f5/05/47/f505479d79562adf0951b1fe5cb662ef.jpg" alt="post 1" />
                </li>
                <li>
                    <img src="https://i.pinimg.com/564x/f5/05/47/f505479d79562adf0951b1fe5cb662ef.jpg" alt="post 1" />
                </li>
                <li>
                    <img src="https://i.pinimg.com/564x/f5/05/47/f505479d79562adf0951b1fe5cb662ef.jpg" alt="post 1" />
                </li>
                <li>
                    <img src="https://i.pinimg.com/564x/f5/05/47/f505479d79562adf0951b1fe5cb662ef.jpg" alt="post 1" />
                </li>
                <li>
                    <img src="https://i.pinimg.com/564x/f5/05/47/f505479d79562adf0951b1fe5cb662ef.jpg" alt="post 1" />
                </li>
                <li>
                    <img src="https://i.pinimg.com/564x/f5/05/47/f505479d79562adf0951b1fe5cb662ef.jpg" alt="post 1" />
                </li>
                <li>
                    <img src="https://i.pinimg.com/564x/f5/05/47/f505479d79562adf0951b1fe5cb662ef.jpg" alt="post 1" />
                </li> */}
            
            </ul>
            {/* <div className="container">
            </div> */}

            <div className="setDiplsyButton">
                <PiGridFourFill className="icon" onClick={() => setModalFunction()}/>

                <div className={`setDisplayModal ${modal}`}>
                    <p onClick={() => setDisplayFunction("")}>Pequeno</p>
                    <p onClick={() => setDisplayFunction("display2")}>Médio</p>
                    <p onClick={() => setDisplayFunction("display3")}>Grande</p>
                </div>
            </div>
                
        </PostListStyled>
    )
}