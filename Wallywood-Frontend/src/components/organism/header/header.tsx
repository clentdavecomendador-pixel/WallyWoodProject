import { BurgerMenu } from "../../Atoms/BurgerMenu/burgermenu"
import { HeaderStyled } from "./header.styled"
import { Basket } from "../../../assets/svg/basket"
import { NavLink } from "react-router-dom"

type HeaderProps = {
    isMenuOpen: boolean
    onMenuToggle: () => void
}

export const Header = ({ isMenuOpen, onMenuToggle }: HeaderProps) => {

    return(
        <HeaderStyled>
            <h1>wallywood</h1>
            <NavLink to="/basket" id="basketId">
                {Basket}
            </NavLink>
            <BurgerMenu
                isMenuOpen={isMenuOpen}
                onMenuToggle={onMenuToggle}
            />
        </HeaderStyled>
    )
}