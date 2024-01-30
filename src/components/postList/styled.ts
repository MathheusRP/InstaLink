import styled, {css} from "styled-components";

interface ImageInterface {
    widthimage: number | undefined
}

export const PostListStyled = styled.section<ImageInterface>`
    width: 100%;
    margin-bottom: 100px;
    padding-bottom: 150px;

    .container {
        height: 100vh;
        background-color: blue;
    }

    .postList {
        display: grid;
        grid-template-columns: 30% 30% 30%;
        gap: 8px;
        row-gap: 16px;
        justify-content: space-between;
        width: 90vw;
        min-width: 100%;
        max-width: 800px;
        
        ${({widthimage}) => {
            return css`
                grid-auto-rows: ${widthimage}px;
            `
        }}

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
        gap: 16px;
    }

    ul.display3 {
        grid-template-columns: 100%;
        gap: 32px;
        justify-content: center;

        li img {
            box-shadow: 0px 10px 10px rgb(0, 0, 0, 0.3);
        }

    }

    .setDiplsyButton {
        position: fixed;
        bottom: 8px;
        z-index: 10;
    
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

        .closeModal {
            height: 100vh;
            width: 100vw;
            background-color: transparent;
            position: fixed;
            bottom: 0;
            z-index: -2;
        }

        .modalOff {
            display: none;
        }
    }

    @media (min-width: 800px){
        ul.display3 {
        grid-template-columns: 80%;

    }
    }
`