import { FooterStyled } from "./footer.styled"
import media from "../../../assets/media.png"

export const Footer = () => {
    return(
        <FooterStyled>
            <article>
                <h3>wallywood</h3>
                <p>Øster Uttrupvej 1</p>
                <p>9000 Aalborg</p>
            </article>
            <article>
                <p>CVR: 12345678</p>
                <p>MAIL: info@wallywood.dk</p>
                <p>MOBIL: +45 9812 3456</p>
            </article>
            <div>
                <img src={media} alt="media" />
            </div>
        </FooterStyled>
    )
}