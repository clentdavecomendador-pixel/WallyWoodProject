import styled from "styled-components";
import { Reset } from "../../../styles/reset";

export const BurgerMenuStyled = styled.button`
 ${Reset}
 display: flex;
 justify-content: center;
 align-items: center;
 border: none;
 background-color: transparent;
 padding: 0.5rem;

 svg {
  width: 2rem;
  height: 2rem;
 }
`