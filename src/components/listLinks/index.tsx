import { ListLinksStyled, LinkStyled } from "./styled";

export const ListLink = () => {

    return (
        <ListLinksStyled>
            <ul>
                <LinkStyled color1={"75, 150, 210, 1"} color2={null} color3={null}>
                    <a target="_blank" href="https://www.facebook.com"> Facebook</a>
                </LinkStyled>
                <LinkStyled color1={"226, 76, 76, 1"} color2={null} color3={null}>
                    <a href="https://www.youtube.com"> Youtube</a>
                </LinkStyled>
                <LinkStyled color1={"64, 110, 230, 1"} color2={"140, 80, 180, 1"} color3={"240, 57, 57, 1"}>
                    <a target="_blank" href="https://www.instagram.com"> Instagram</a>
                </LinkStyled>
                <LinkStyled color1={"80, 80, 80, 1"}>
                    <a> Sit</a>
                </LinkStyled>
            </ul>
        </ListLinksStyled>
    )
}