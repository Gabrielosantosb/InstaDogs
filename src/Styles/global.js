import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import loginImage from "../../src/assets/login.jpg";

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

`;
export const ImageContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;
  &::before {
    display: block;
    content: "";
    background: url(${loginImage}) no-repeat center center;
    background-size: cover;
  }
`;
export const ButtonNav = styled(NavLink)`
  background: ${(props) => (props.active ? "#fb1" : "#eee")};
  border-radius: 0.2rem;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: 0.1s;
  cursor: pointer;
  &:focus {
    background: white;
    box-shadow: 0 0 0 3px #eee;
    border-color: #333;
    outline: none;
  }
  &:active {
    background: white;
    box-shadow: 0 0 0 3px yellow;
    border-color: yellow;
  }
`;

// export const ButtonNav = styled(NavLink)`
// text-decoration: none;
// padding: 8px 16px;
// background-color: #eaeaea;
// border-radius: 4px;
// color: #333;
// margin: 0 8px;
// &:hover {
//   background-color: gray;
//   transition: 0.4s;
// }
// `;

export const Title = styled.h1`
  font-family: "Spectral", serif;
  line-height: 1;
  font-size: 3rem;
  margin: 1rem 0;
  position: relative;
  &::after {
    content: "";
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: #fb1;
    position: absolute;
    bottom: 5px;
    left: 5px;
    border-radius: 0.2rem;
    z-index: -1;
  }
`;

export const Subtitle = styled(NavLink)`
  font-family: "Spectral", serif;
  text-decoration: none;
  color: #000;
  line-height: 1;
  font-size: 2rem;
  &::after {
    content: "";
    display: block;
    background: #ddd;
    height: 0.5rem;
    width: 3rem;
    border-radius: 0.2rem;
  }
`;
