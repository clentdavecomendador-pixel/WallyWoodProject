import styled from "styled-components";
import { Reset } from "../../../styles/reset";

export const GenrePosterStyled = styled.section`
${Reset}
    display: grid;
    gap: 1.5rem;

    h1{
        margin: 0;
    }

    #backGenre{
        color: #000000;
        text-decoration: none;
        border: 2px solid black;
        border-radius: 1rem;
        padding: 0.75rem 1rem;
        width: fit-content;
        background: rgba(255, 255, 255, 0.7);
    }

    article{
        border: 2px solid black;
        border-radius: 1.5rem;
        overflow: hidden;
        background: rgba(255, 255, 255, 0.5);

        a{
            display: grid;
            gap: 1rem;
            color: #000000;
            text-decoration: none;

            img{
                display: block;
                width: 100%;
                height: 100%;
                min-height: 220px;
                object-fit: contain;
                background: #f3f3f3;
            }

            h2{
                margin: 0;
                padding: 0 1rem 1rem;
            }

            p{
             padding: 0 1rem;
            }
            
        }
        div{
         display: flex;
         padding: 1rem;
         justify-content: space-between;
            button{
             padding: 0.5rem 1rem;
                span{
                    svg{
                     width: 1.5rem;
                     height: 1.5rem;
                    }
                }
            }
        }
    }
`