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

export const Title = styled.h1`
  font-family: "Spectral", serif;
  line-height: 1;
  font-size: 3rem;
  margin: 1rem 0;
  position: relative;
&::after{
    content: '';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: #fb1;
    position: absolute;
    bottom:5px;
    left:5px;
    border-radius: 0.2rem;
    z-index: -1;
}` ;

export const Subtitle = styled(NavLink)`
    font-family: "Spectral", serif;
    text-decoration: none;
    color: #000;
    line-height: 1;    
    font-size: 2rem;
    &::after{

        content: '';
        display: block;
        background: #ddd;
        height: 0.5rem;
        width: 3rem;
        border-radius: 0.2rem;
        
    }
`
