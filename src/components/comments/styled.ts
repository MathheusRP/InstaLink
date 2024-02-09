import styled from "styled-components";

export const SendCommentStyled = styled.section`
    

`

export const CommentsStyled = styled.ul`
    
    /* width: 100vw; */
    /* background-color: aqua; */
    display: flex;
    flex-direction: column;
    gap: 70px;
    padding-top: 50px;
    padding-bottom: 50px;
    

    &.closeComments {
        display: none;
        
        /* background-color: beige; */
    }
    
    li {
        min-height: 150px;
        /* max-width: 400px; */
        background-color: var(--white1);
        border-radius: 18px;
        position: relative;
        box-shadow: 0px 5px 5px rgb(0, 0, 0, 0.25);
        padding: 55px 10px 40px 10px;

        .CommentOwnerInfo {
            display: flex;
            position: absolute;
            left: 20px;
            right: 20px;
            top: -27px;
            align-items: center;


            img {
                width: 50px;
                height: 50px;
                object-fit: cover;
                border-radius: 50%;
                z-index: 2;
                border: 2px solid var(--white1);
                box-sizing: content-box;
                box-shadow: 0px 5px 5px rgb(0, 0, 0, 0.25);
            }

            span {
                background-color: var(--white1);
                box-shadow: 0px 5px 5px rgb(0, 0, 0, 0.25);
                padding: 5px 10px 5px 25px ;
                transform: translateX(-15px);
                z-index: 1;
                border-radius: 8px;

                p {
                    font-size: 18px;
                    color: var(--black2);
                    font-weight: 600;
                }
            }
        }

        .time {
            position: absolute;
            top: 25px;
            right: 15px;
            color: var(--grey1);
        }

        .text {
            font-size: 16px;
        }

        .numberOf {
            position: absolute;
            bottom: -15px;
            padding: 5px 10px;
            background-color: var(--white1);
            font-size: 18px;
            border-radius: 8px;
            box-shadow: 0px 5px 5px rgb(0, 0, 0, 0.25);
            font-weight: 600;
            color: var(--black2);

            &.comments {
                left: 20px;
            }

            &.likers {
                right: 20px;
                display: flex;
                align-items: center;
                gap: 10px;

                .iconLike {
                    font-size: 20px;
                  
                    
                    /* color: var(--black2); */
                }
            }
        }
    }
   
`