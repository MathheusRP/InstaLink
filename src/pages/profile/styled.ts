import {styled} from "styled-components"

export const ProfileStyled = styled.main`
    /* border: solid red 4px; */
    /* height: 100%; */
    width: 100%;
    height: 100vh;
    max-width: 800px;
    /* background-color: aqua; */
    margin: 0px auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0px 4% ;
    /* overflow: auto; */
    
    &::-webkit-scrollbar{
        background-color: transparent;
        width: 5px;
        border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--primaryColor);
        border-radius: 2px;
    }

    @media (min-width: 600px){
        padding: 0px 2%;
    }

    @media (min-width: 800px){
        padding: 0px;
    }
    
`