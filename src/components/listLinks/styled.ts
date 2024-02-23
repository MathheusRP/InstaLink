import styled, { css } from "styled-components";

export const ListLinksStyled = styled.section`

    width: 100%;
    margin-bottom: 100px;
    padding-bottom: 150px;

    ul {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding-top: 24px;
    }
`

interface IColors {
    color1: string
    color2?: string | null
    color3?: string | null
}

export const LinkStyled = styled.li<IColors>`
    background-color: var(--black2);
    height: 50px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        filter: brightness(1.2);
    }

    ${({color1, color2, color3}) => {
        
        if( color3 != null && color2 != null){
            return (
                css`
                    background: linear-gradient(30deg, rgba(${color1}) 0%, rgba(${color2}) 50%, rgba(${color3}) 100%);
                `
            )
        } else if (color2 != null) {
            return (
                css`
                    background: linear-gradient(30deg, rgba(${color1}) 0%, rgba(${color2}) 100%);
                `
            )
        } else {
            return (
                css`
                    background-color: rgb(${color1});
                `
            )
        }   
    }}

    a {
        color: var(--white1);
        font-size: 22px;
        font-weight: 600;
    }

`