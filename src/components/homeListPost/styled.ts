import styled from "styled-components";

export const HomePostListStyled = styled.section`

    width: 100%;
    max-width: 600px;
    min-height: 500px;
    /* border: solid blue 2px; */
    margin: 0px auto;

    ul {
        /* background-color: aqua; */
        display: flex;
        flex-direction: column;
        padding: 20px 0px 100px 0px;
        gap: 50px;

        li {
            display: flex;
            flex-direction: column;
            position: relative;
            gap: 10px;

            .postOwnerProfile {
                /* background-color: brown; */
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 0px 10px;

                img {
                    width: 50px;
                    height: 50px;
                    object-fit: cover;
                    border-radius: 50%;
                }

                .name {
                    font-size: 18px;
                    font-weight: 600;
                    color: var(--black1);
                }

            }

            .icon {
                position: absolute;
                right: 10px;
                top: 12px;
                font-size: 20px;
            }

            figure {
                /* width: 100%; */
                /* background-color: var(--black2); */
                

                .imgLink {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    background-color: var(--black2);

                    img {
                        width: 100%;
                        /* width: 100%; */
                        object-fit: cover;
                        max-height: 700px;
                    }
                }  
            }

            .postButtons {
                display: flex;
                position: relative;
                padding: 5px 10px;

                .likeIcon {
                    font-size: 32px;
                    color: var(--black2);
                    /* background-color: aqua; */
                    position: absolute;
                    right: 16px;
                    top: 10px;
                }

                span {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    font-size: 16px;
                }
            }

            
        }
    }

    @media (min-width: 1000px) {
        li {
            .postOwnerProfile {
                span {
                    font-size: 28px;
                }
            }
        }
    }
`