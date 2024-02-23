import styled from "styled-components";

export const ProfileAboutStyled = styled.section`

    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 16px;
    padding-bottom: 50px;
    gap: 32px;

    .text {
        text-align: center;
        font-size: 16px;
        font-weight: 600;
        color: var(--black1);
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 20px;

        li {
            display: flex;
            flex-direction: column;
            gap: 6px;

            span {
                color: var(--primaryColor);
                font-size: 22px;
            }

            p {
                font-size: 18px;
                color: var(--black2);
            }
        }
    }
`