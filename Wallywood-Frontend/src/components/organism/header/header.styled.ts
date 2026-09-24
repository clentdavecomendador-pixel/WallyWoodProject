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
`