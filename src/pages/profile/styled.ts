import {styled} from "styled-components"

export const ProfileStyled = styled.main`
    /* border: solid red 4px; */
    /* height: 100%; */
    width: 100%;
    min-height: 100vh;
    max-width: 800px;
    /* background-color: aqua; */
    margin: 0px auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 4% ;
    /* overflow-x: hidden; */
    /* overflow-y: scroll; */
/*     
    &::-webkit-scrollbar{
        background-color: transparent;
        width: 5px;
        border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--primaryColor);
        border-radius: 2px;
    } */

    .content {
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 600px){
        padding: 0px 2%;
    }

    @media (min-width: 800px){
        padding: 0px;
    }

    @media (min-width: 1400px){
        .userBar {
            display: none;
        }

        
    }
    
`