import styled from "styled-components";

export const UserBarStyled = styled.section`
    position: fixed;
    background-color: var(--white1);
    height: 65px;
    width: 100vw;
    bottom: 0px;
    display: flex;
    justify-content: center;
    left: 0px;

    .bar {
        position: absolute;
        height: 50px;
        width: 65%;
        max-width: 400px;
        border: solid 2px var(--black1);
        z-index: 3;
        top: 8px;
        border-radius: 25px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .iconBar {
        height: 35px;
        width: 35px;
        color: var(--black1);
        cursor: pointer;
    }

    .iconBar:hover{
        color: var(--primaryColor);
    }


`