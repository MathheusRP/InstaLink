import {styled} from "styled-components";

export const ProfileContentStyled = styled.section`

    min-height: 300px;
    width: 100%;
    /* max-width: 650px; */
    border-top: solid var(--black1) 3px;
    margin-top: 100px;
    padding: 16px 0px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    .navigate {
        width: 100%;
        display: flex;
        justify-content: space-around;
        /* background-color: brown; */

        p {
            width: 100px;
            color: var(--black1);
            font-size: 18px;
            font-weight: 600;
            text-align: center;
            cursor: pointer;
            transition: 0.5s;

            &:hover {
                color: var(--primaryColor);
                transition: 0.5s;
            }
        }

        .select {
            color: var(--primaryColor);
        }
    }

    @media (min-width: 700px) {
        margin-top: 130px;

        .navigate p {
            font-size: 22px;
        }
    }

    @media (min-width: 800px) {
        .navigate p {
            font-size: 26px;
        }
    }

`


