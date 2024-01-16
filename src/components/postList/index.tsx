import { PostListStyled } from "./styled";
import { PiGridFourFill } from "react-icons/pi";
import { useState, useRef, useLayoutEffect } from "react";

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

    const container = useRef<any>(null)
    const [imgwidth, setImageWidth] = useState<number>()

    useLayoutEffect(() => {
        setImageWidth(container.current.clientWidth)

        function handleWindowResize() {
            setImageWidth(container.current.clientWidth)
        }

        window.addEventListener('resize', handleWindowResize);

    }, [display])

    return (

        <PostListStyled widthimage={imgwidth}>
            <ul  className={`${display}`}>
                <li ref={container}>
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
            
            </ul>
            
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