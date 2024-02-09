import {createGlobalStyle} from "styled-components"


export const GlobalStyled = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&family=Lily+Script+One&display=swap');

    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    button {
        cursor: pointer;
    }

    body {
        background-color: var(--white1);
        /* overflow-y: hidden; */
    
    }

    h1, h2, h3, h4, p, button, span {
        font-family: 'Inter', sans-serif;
    }

    ul, li {
        list-style: none;
    }

    :root {
        --white1: #ECECEC;
        --black1: #353535;
        --black2: #5A5A5A;
        --grey1: #797979;
        --primaryColor: #21B2E0;
        --red: #C84343;

        --teste: 100vw
    }

    
`