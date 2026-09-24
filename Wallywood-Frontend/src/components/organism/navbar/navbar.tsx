import { NavLink } from "react-router-dom"
import { NavbarStyled } from "./navbar.styled"

export const Navbar = () => {
    return(
        <NavbarStyled>
            <ul>
                <li><NavLink to="/">Forside</NavLink></li>
                <li><NavLink to="/poster">plakater</NavLink></li>
                <li><NavLink to="/aboutus">om os</NavLink></li>
                <li><NavLink to="/contactus">kontact os</NavLink></li>
                <li><NavLink to="/login">login</NavLink></li>
            </ul>
        </NavbarStyled>
    )
}