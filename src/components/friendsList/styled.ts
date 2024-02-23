import styled from "styled-components";

export const FriendsListStyled = styled.section`

    display: none;
    top: 350px;
    left: 32px;
    
    .myProfile {
        display: flex;
        flex-direction: column;
        gap: 32px;

        a {
            display: flex;
            align-items: center;
            gap: 10px;
            text-decoration: none;

            .myPhoto {
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }

            .myName {
                color: var(--black2);
                font-size: 20px;
                font-weight: 600;    
            }
        } 
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 16px;

        span {
            color: var(--black2);
            font-weight: 600;
            font-size: 20px;
            cursor: pointer;
        }

        li {
            display: flex;

            a {
                display: flex;
                align-items: center;
                gap: 10px;
                text-decoration: none;
                
                img {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                }

                span {
                    color: var(--black1);
                    font-size: 18px;
                }
            }
        }
    }

    @media (min-width: 1400px) {
        display: flex;
        position: fixed;
        width: 240px;
    }

    @media (min-width: 1600px) {
        width: 300px;
        right: 32px;
        top: 32px;
        left: auto;
    }

`