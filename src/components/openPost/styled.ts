import styled from "styled-components";

export const PostOpenStyled = styled.div`

    height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: var(--black2);
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* z-index: 11; */
    /* overflow-x: hidden; */
    overflow-y: auto;

    .closeButton {
        position: absolute;
        top: 20px;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(0, 0, 0, 0.75);
        color: var(--white1);
        font-weight: 600;
        font-size: 24px;
        border-radius: 50%;
        border: none;
        cursor: pointer;

        &.close {
            display: none;
        }

        &.up {
            animation: 1s upButton;
        }

        &.down {
            animation: 1s downButton;
        }
    }
    
    .imageContainer {
        /* height: 100%; */
        /* overflow-y: auto; */
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        max-width: 1000px;
        justify-content: center;
        justify-content: ce;
        padding: 0px;
        /* max-height: 100vh; */
        /* margin-bottom: 50px; */

        @media (max-height: 100vh) {
            justify-content: start;
        }

        li {
            align-self: center;
            display: flex;
            background-color: var(--black1);
        }

        img {
            width: 100vw;
            max-width: 100%;
            max-height: 100vh;
            object-fit: contain;
        }
        
        &.carrossel {
            overflow-x: auto;
            overflow-y: hidden;
            flex-direction: row;
            height: 100%;
            width: 100vw;

            img {
               width: 100vw;

            }
        }
    }

    .postInfo {
        /* min-height: 200px; */
        width: 100%;
        background-color: rgb(0, 0, 0, 0.75);
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0px;
        padding: 16px;
        /* display: flex;
        flex-direction: column; */
        gap: 10px;
        max-width: 1000px;
        max-height: 100vh;
        /* height: 700px; */
        margin: 0px auto;
        overflow-y: scroll;
        transition: 4s;

        &::-webkit-scrollbar{
            background-color: transparent;
            width: 5px;
            border-radius: 2px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: var(--primaryColor);
            border-radius: 2px;
        }

        &.up {
            animation: 1s up;
        }

        &.down {
            animation: 1s down;
        }

        &.close {
            display: none;
        }

        &.openComments {
            height: 100vh;
            top: 0px;
        }

        .postInfoContainer {
            display: flex;
            flex-direction: column;
            gap: 10px;
            min-height: 200px;
        }

        .ownerProfile {
            display: flex;
            position: relative;
            
            
            .info {
                display: flex;
                align-items: center;
                gap: 10px;

                img {
                height: 60px;
                width: 60px;
                object-fit: cover;
                border-radius: 50%;
                }

    
                h3 {
                    color: var(--white1);
                }

                span {
                    color: var(--white1);
                    font-size: 0.8rem;
                }
            }
        }

        .ownerComment {
            max-height: 100px;
            width: 100%;
            color: var(--white1);
            font-size: 1rem;
            overflow-y: auto;
            /* background-color: aqua; */

            &::-webkit-scrollbar{
                background-color: transparent;
                width: 5px;
                border-radius: 2px;
            }

            &::-webkit-scrollbar-thumb {
                background-color: var(--primaryColor);
                border-radius: 2px;
            }
        }

        .likeAndCommentInfo {
            display: flex;
            flex-direction: column;
            gap: 5px;
            color: var(--white1);
            font-size: 0.8rem;

            p {
                cursor: pointer;
            }
        }
    }

    @keyframes up {
        0% {
            transform: translateY(100%);
        }

        100% {
            transform: translateY(0);
        }
    }

    @keyframes down {
        0% {
            transform: translateY(0);
        }

        100% {
            transform: translateY(100%);
        }
    }

    @keyframes upButton {
        0% {
            transform: translateY(-300%);
        }

        100% {
            transform: translateY(0);
        }
    }

    @keyframes downButton {
        0% {
            transform: translateY(0);
        }

        100% {
            transform: translateY(-300%);
        }
    }
`