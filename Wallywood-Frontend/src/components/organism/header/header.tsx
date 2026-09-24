import { BurgerMenu } from "../../Atoms/BurgerMenu/burgermenu"
import { HeaderStyled } from "./header.styled"

type HeaderProps = {
    isMenuOpen: boolean
    onMenuToggle: () => void
}

export const Header = ({ isMenuOpen, onMenuToggle }: HeaderProps) => {

    return(
        <HeaderStyled>
            <h1>wallywood</h1>
            <BurgerMenu
                isMenuOpen={isMenuOpen}
                onMenuToggle={onMenuToggle}
            />
        </HeaderStyled>
    )
}