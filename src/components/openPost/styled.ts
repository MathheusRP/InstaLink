import styled from "styled-components";

export const PostOpenStyled = styled.div`

    height: 100%;
    width: 100vw;
    position: fixed;
    background-color: rgb(0, 0, 0, 0.3);
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 100px;
    overflow-x: scroll;
    /* display: none; */

    .postInfo {
        width: 95%;
        /* height: 1800px; */
        height: min-content;
        background-color: var(--white1);
        border-radius: 16px;
        padding: 32px 16px 60px 16px;
        display: flex;
        flex-direction: column;
        gap: 40px;
        position: relative;

        &::before {
            content: "";
            height: 90px;
            width: 40px;
            background-color: var(--white1);
            position: absolute;
            bottom: -55px;
            left: 25px;
            border-radius: 14px;
            box-shadow: 0px 5px 8px rgb(0, 0, 0, 0.25);
        }

        &::after {
            content: "";
            height: 90px;
            width: 40px;
            background-color: var(--white1);
            position: absolute;
            bottom: -55px;
            right: 25px;
            border-radius: 14px;
            box-shadow: 0px 5px 6px rgb(0, 0, 0, 0.25);
        }

        .postImage {
            width: 100%;
            border-radius: 20px;
            border: 5px solid var(--white1);
            box-shadow: 0px 4px 8px 4px rgb(0, 0, 0, 0.25);
            /* height: 200px; */
        }

        .info {
            display: flex;
            flex-direction: column;
            /* align-items: center; */
            position: relative;
            gap: 10px;
            /* height: 70px; */
            /* background-color: aqua; */

            .profileInfo {
                display: flex;
                gap: 10px;
            }

            img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }

            .textInfo {
                position: relative;
                
                h3 {
                    font-size: 20px;
                    letter-spacing: 1px;
                    margin-top: 5px;
                    color: var(--black1);
                }

                span {
                    color: var(--grey1);
                    font-weight: 16px;
                }
            }

            p {
                color: var(--black1);
                font-size: 18px;
 
            }
            
        }

        .closeButton {
            color: var(--white1);
            width: 40px;
            height: 40px;
            background-color: var(--red);
            border: solid var(--white1) 4px;
            border-radius: 50%;
            position: absolute;
            font-weight: 600;
            font-size: 20px;
            align-self: center;
            top: 16px;
            box-shadow: 0px 0px 10px 2px rgb(0, 0, 0, 0.3);
        }
    }

    .comments {
        /* height: 300px; */
        width: 95%;
        margin-top: 20px;
        border-radius: 20px;
        background-color: var(--white1);
        padding: 50px 16px 40px 16px;
        display: flex;
        flex-direction: column;
        gap: 32px;

        .commentsInfo {
            height: 50px;
            width: 250px;
            border: solid var(--black2) 4px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            padding: 0px 10px;
            margin: 0px auto;
            justify-content: space-between;

            span {
                display: flex;
                gap: 10px;
                align-items: center;
                
                p {
                    font-size: 18px;
                    font-weight: 600;
                    color: var(--black2);
                }
                
            }

            .icon {
                font-size: 30px;
                color: var(--black2);
            }
        }
    }
`