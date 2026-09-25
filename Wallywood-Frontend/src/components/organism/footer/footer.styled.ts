import styled from "styled-components";
import { Reset } from "../../../styles/reset";

export const FooterStyled = styled.footer`
 ${Reset}
 display: grid;
 grid-template-columns: repeat(2 , 1fr);
 padding: 1rem 1rem;
    article{
     font-size: 1.25rem;
        h3{
         color: #D97852;
         margin: 0.5rem 0;
        }
        p{
         margin: 0.5rem 0;
        }
    }
    div{
     grid-column: span 2;
     padding: 0 2rem;
    }
`