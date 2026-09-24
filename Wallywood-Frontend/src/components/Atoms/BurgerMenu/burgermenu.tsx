import { Icon } from "../../../assets/svg/Icon"
import { XIcon } from "../../../assets/svg/xIcon"
import { BurgerMenuStyled } from "./burgermeny.styled"


type BurgerMenuProps = {
    isMenuOpen: boolean
    onMenuToggle: () => void
}

export const BurgerMenu = ({ isMenuOpen, onMenuToggle }: BurgerMenuProps) => {

    return(
        <BurgerMenuStyled
            onClick={onMenuToggle}
        >
            {isMenuOpen ? XIcon : Icon}
        </BurgerMenuStyled>
    )
}