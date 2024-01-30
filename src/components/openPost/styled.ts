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
    overflow-x: scroll;
    z-index: 11;
    overflow-x: hidden;

    
    .imageContainer {
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        max-width: 1000px;

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
        min-height: 200px;
        width: 100%;
        background-color: rgb(0, 0, 0, 0.75);
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 1000px;
        margin: 0px auto;
        

        &.up {
            animation: 1s up;
        }

        &.down {
            animation: 1s down;
        }

        &.close {
            display: none;
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

        .postComment {
            max-height: 100px;
            width: 100%;
            color: var(--white1);
            font-size: 1rem;
            overflow-y: auto;
        }

        .likeAndCommentInfo {
            display: flex;
            flex-direction: column;
            gap: 5px;
            color: var(--white1);
            font-size: 0.8rem;
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
`