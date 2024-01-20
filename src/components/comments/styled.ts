import styled from "styled-components";

export const SendCommentStyled = styled.section`
    border: solid var(--black2) 2px;
    border-radius: 16px;
    position: relative;
    padding-bottom: 15px;

    textarea {
        height: 80px;
        width: 100%;
        border: none;
        padding: 10px;
        color: var(--black2);
        font-size: 16px;
        background-color: transparent;
        outline: none;
       
    }

    button {
        position: absolute;
        right: 20px;
        bottom: -14px;
        padding: 2px 10px;
        font-size: 16px;
        border-radius: 8px;
        border: solid var(--black2) 2px;
        background-color: var(--white1);
        font-weight: 600;
        color: var(--black2);
    }

`

export const CommentsStyled = styled.ul`

    width: 100%;
    /* border: solid blue 2px; */
    display: flex;
    flex-direction: column;
    gap: 64px;
    margin-top: 20px;

    li {
        /* height: 50px; */
        width: 100%;
        border: solid var(--black2) 2px;
        border-radius: 16px;
        position: relative;
        padding: 32px 10px;

        .commentOwner {

            img {
                width: 50px;
                height: 50px;
                object-fit: cover;
                border-radius: 50%;
                border: solid var(--black2) 2px;
                position: absolute;
                top: -25px;
                left: 20px;
            }

            .time {
                position: absolute;
                right: 10px;
                top: 5px;
                font-size: 14px;
                color: var(--grey1);
            }

            .profileName {
                padding: 4px 4px 4px 20px;
                border: solid var(--black2) 2px;
                width: fit-content;
                height: 30px;
                /* width: 100%; */
                background-color: var(--white1);
                border-radius: 8px;
                position: absolute;
                top: -16px;
                right: 0px;
                left: 55px;
                

                p {
                    font-size: 16px;
                    font-weight: 600;
                    color: var(--black2);
                    display: flex;
                    
                }
            }
        }

        .interactions {
            height: 35px;
            /* width: 150px; */
            border-radius: 12px;
            border: solid var(--black2) 2px;
            position: absolute;
            bottom: -18px;
            right: 15px;
            background-color: var(--white1);
            display: flex;
            align-items: center;
            padding: 0px 8px;
            gap: 16px;

            span {
                display: flex;
                gap: 5px;
                color: var(--black2);
               

                .icon {
                    font-size: 24px;
                }

                p {
                    font-size: 18px;
                }
            }
        }
    }
`