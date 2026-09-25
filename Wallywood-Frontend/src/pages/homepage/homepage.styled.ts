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
                    div{
                     display: flex;
                     justify-content: space-between;
                        button{
                         padding: 0.5rem 1rem;
                            span{
                                svg{
                                 width: 1.5rem;
                                 height: 1.5rem;
                                }
                            }
                            
                            a{
                             color: #000000;
                             text-decoration: none;
                            }
                        }
                    }
            }
        }
    }
`