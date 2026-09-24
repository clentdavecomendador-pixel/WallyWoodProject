import styled from "styled-components";
import { Reset } from "../../styles/reset";

export const HomePageStyled = styled.section`
 ${Reset}
    #cards{
        display: grid;
        gap: 2rem;

        #postercard{
            border: 2px solid black;
            border-radius: 2rem;

            figcaption{
                display: grid;
                gap: 1rem;
                padding: 1rem;
            }
        }
    }
`