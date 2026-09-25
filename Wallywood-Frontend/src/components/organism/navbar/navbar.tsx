import { NavLink } from "react-router-dom"
import { NavbarStyled } from "./navbar.styled"

export const Navbar = () => {
    return(
        <NavbarStyled>
            <ul>
                <li><NavLink to="/">Forside</NavLink></li>
                <li><NavLink to="/poster">Plakater</NavLink></li>
                <li><NavLink to="/aboutus">Om os</NavLink></li>
                <li><NavLink to="/contactus">Kontact os</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        </NavbarStyled>
    )
}