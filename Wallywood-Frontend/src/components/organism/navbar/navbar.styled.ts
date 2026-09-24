import styled from "styled-components";
import { Reset } from "../../../styles/reset";

export const NavbarStyled = styled.nav`
 ${Reset}
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 width: 100%;
    ul{
     display: flex;
     flex-direction: column;
      ${Reset}
      width: 100%;
      align-items: center;
      justify-content: center;
      gap: 2rem;
        li{
         width: 100%;
         text-align: center;
         list-style-type: none;
            a {
             display: block;
             text-decoration: none;
             color: #000000;
             font-size: 1.25rem;
             width: 100%;
             transition: 2ms;
                &.active{
                 color: #D97852;
                 transform: scale(1.35);
                }
            }
        }
    }
`