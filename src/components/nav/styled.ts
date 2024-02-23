import styled from "styled-components";

export const NavStyled = styled.nav`
    display: none;

    @media (min-width: 1400px){
        display: flex;
        flex-direction: column;
        height: 50vh;
        position: fixed;
        left: 32px;
        top: 32px;
        gap: 18px;

        p {
            font-size: 24px;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 12px;
            color: var(--black2);
            cursor: pointer;
        }

        p:hover {
            color: var(--primaryColor);
        }

        p .search {
            width: 250px;
            color: var(--black1);
            font-size: 18px;
            font-weight: 600;
            padding: 5px 10px;
            border-radius: 10px;
            border: solid 3px var(--black2);
            outline: none;

            &:hover {
                border-color: var(--primaryColor);
            }
        }
    }

`