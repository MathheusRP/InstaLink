import styled from "styled-components";

export const HomeStyled = styled.main`
    display: flex;
    width: 100%;
    /* max-width: 800px; */
    /* border: solid red 2px; */
    margin: 0 auto;
    position: relative;

    @media (min-width: 1400px) {
        .userBar {
            display: none;
        }
    }

`