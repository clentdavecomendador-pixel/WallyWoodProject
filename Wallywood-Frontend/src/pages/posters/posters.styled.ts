import styled from "styled-components";
import { Reset } from "../../styles/reset";

export const PostersStyled = styled.section`
 ${Reset}
    #genre-list{
     ${Reset}
        #genres{
         ${Reset}
         display: grid;
         grid-template-columns: repeat(2, 1fr);
         gap: 1rem;
         list-style: none;
            li{
             list-style: none;
             padding: 0.5rem;
             width: 100%;
                a{
                 display: block;
                 color: #000000;
                 text-decoration: none;
                 width: 100%;
                 font-size: 1.25rem;
                 transition: 2ms;
                    &.active{
                     color: #D97852;
                    }
                }
            }
        }
    }
`