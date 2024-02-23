import {styled} from "styled-components"

export const ProfileStyled = styled.main`

    width: 100%;
    min-height: 100vh;
    max-width: 800px;
    margin: 0px auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0px 4% ;

    .content {
        display: flex;
        flex-direction: column;
        width: 100%;
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