import {styled} from "styled-components"

export const TopProfileStyled = styled.section`
    /* height: 300px; */
    width: 100%;
    /* max-width: 650px; */
    /* border: solid red 1px; */
    margin-top: 16px;
    position: relative;
    display: flex;
    flex-direction: column;
    

    .cover {
        width: 100%;
        height: 50vw;
        max-height: 300px;
        border: solid var(--white1) 4px;
        border-radius: 16px;
        box-shadow: 0px 6px 10px rgb(0, 0, 0, 0.35);
        box-sizing: content-box;
        object-fit: cover;
    }

    .profileImage {
        height: 75px;
        width: 75px;
        object-fit: cover;
        position: absolute;
        bottom: -37px;
        align-self: center;
        border-radius: 50%;
        border: 4px solid var(--white1);
        box-sizing: content-box;
        box-shadow: 0px 6px 10px rgb(0, 0, 0, 0.35);
     
    }

    h3 {
        position: absolute;
        align-self: center;
        bottom: -75px;
        font-size: 22px;
        color: var(--black1);
    }

    @media (min-width: 700px) {

        .profileImage {
            height: 100px;
            width: 100px;
            bottom: -50px;
        }

        h3 {
            font-size: 26px;
            bottom: -100px;
        }
    }

`