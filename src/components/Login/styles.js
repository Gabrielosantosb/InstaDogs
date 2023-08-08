import { NavLink } from "react-router-dom";
import styled from "styled-components";



export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;


export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;



export const LostPassword = styled(NavLink)`
  display: inline-block;
  color: #666;
  padding: 0.5rem 0;
  line-height: 1;
  &:hover{
    color: #fb1;
    transition: 0.2s;
  }
  &::after {
    content: "";
    background: currentColor;
    display: block;
  }
`;

export const Register = styled(NavLink)`
  position: relative;
  font-size: 2rem;
  color: #000;
  text-decoration: none;
  margin-top: 0.5rem;
  &:hover{
    background: #fb1;
    transition: 0.2s;
  }
`;

export const Button = styled.button`
  text-decoration: none;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  background-color: #fb1;
  border-radius: 4px;
  color: #764701;
  margin-top: 2rem;
  cursor: pointer;
  transition: 0.1s;
  width: 8rem;
  /* min-width: 8rem; */
  &:hover {
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }
  &:disabled {
    opacity: 0.5rem;
    cursor: wait;
  }
`;
