import styled from "styled-components";
import { Reset } from "../../../styles/reset";

export const HeaderStyled = styled.header`
${Reset}
 display: flex;
 padding: 0.5rem 1rem;
 justify-content: space-between;
    h1{
        ${Reset}
        text-transform: uppercase;
        font-size: 3.25rem;
        font-weight: 800;
        color: #D97852;
    }
    #basketId{
     ${Reset}
     display: flex;
     display: flex;
     justify-content: center;
     align-items: center;
     border: none;
     background-color: transparent;
     padding: 0.5rem;
     color: #000000;
     transition: 2ms;
     svg{
         width: 2rem;
         height: 2rem;
        }
            &.active{
             color: #D97852;
             transform: scale(1.35);
            }
    }
`