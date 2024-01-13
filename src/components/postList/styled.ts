import styled from "styled-components";

export const PostListStyled = styled.section`
    width: 100%;
    margin-bottom: 100px;

    .container {
        height: 100vh;
        background-color: blue;
    }

    ul {
        display: grid;
        grid-template-columns: 30% 30% 30%;
        grid-auto-rows: 30%;
        gap: 8px;
        row-gap: 16px;
        justify-content: space-between;
        height: 90vw;
        width: 90vw;
        min-width: 100%;
        max-width: 800px;
        max-height: 800px;

        &::after{
            content: "";
            height: 190px;
            width: 100px;
        }

        li {
            position: relative;
            display: flex;
            flex-direction: column;
            
            img {
                border-radius: 12px;
                border: solid var(--white1) 4px;
                box-shadow: 0px 5px 5px rgb(0, 0, 0, 0.2);
                object-fit: cover;
                width: 100%;
                height: 100%;
            }
        }
    }

    ul.display2 {
        grid-template-columns: 48% 48%;
        grid-auto-rows: 48%;
        gap: 16px;
    }

    ul.display3 {
        grid-template-columns: 100%;
        grid-auto-rows: 100%;
        gap: 32px;

        li img {
            box-shadow: 0px 10px 10px rgb(0, 0, 0, 0.2);
        }
    }

    .setDiplsyButton {
        position: fixed;
        bottom: 8px;
        z-index: 10;
        /* display: none; */
    
        .icon {
            height: 40px;
            width: 40px;
            color: var(--black1);
            cursor: pointer;
        }

        .icon:hover {
            color: var(--primaryColor);
        }

        .setDisplayModal {
            background-color: var(--white1);
            border: solid var(--black1) 4px;
            border-radius: 16px 16px 16px 0px;
            position: absolute;
            bottom: 60px;
            display: flex;
            flex-direction: column;
            padding: 10px;
            gap: 10px;

            p {
                font-size: 20px;
                font-weight: 600;
                color: var(--black1);
                cursor: pointer;
            }
        }

        .setDisplayModal.modalOff {
            display: none;
        }
    }
`