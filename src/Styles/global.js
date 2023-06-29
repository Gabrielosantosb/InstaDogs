import { createGlobalStyle } from "styled-components"
import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        color: #333;
        font-family: Helvetica, Arial, sans-serif;
    }
    img{
        display: block;
        max-width: 100%;
    }
    button{
        display: block;
        font-size: 1rem;
        font-family: Helvetica, Arial, sans-serif;
    }

`

export const ButtonNav = styled(NavLink)`
text-decoration: none;
padding: 8px 16px;
background-color: #eaeaea;
border-radius: 4px;
color: #333;
margin: 0 8px;
&:hover {
  background-color: gray;
  transition: 0.4s;
}
`;
