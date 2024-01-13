import styled from "styled-components";

export const ProfileButtomStyled = styled.div`
    
    height: 35px;
    width: 35px;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
        cursor: pointer;

    }

    .profileMenu {
        background-color: var(--white1);
        border-radius: 16px;
        border: 4px solid var(--black1);
        height: 180px;
        width: 150px;
        position: absolute;
        bottom: 70px;
        left: -60px;
        display: flex;
        flex-direction: column;

        nav {
            display: flex;
            flex-direction: column;
            padding: 10px;
            justify-content: space-between;
            height: 100%;
            
            p {
                color: var(--black1);
                font-size: 1rem;
                cursor: pointer;
            }
        }
    }
    
    .profileMenu::before {
        content: "";
        height: 20px;
        width: 20px;
        background-color: var(--white1);
        position: absolute;
        align-self: center;
        bottom: -15px;
        border-top: 4px solid var(--black1);
        border-left: 4px solid var(--black1);
        transform: rotate(-135deg);
    }

    .profileMenu.displayOff {
        display: none;
    }
`