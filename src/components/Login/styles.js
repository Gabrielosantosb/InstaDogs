import { NavLink } from "react-router-dom";
import styled from "styled-components";
import loginImage from "../../assets/login.jpg";

export const LoginContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;
  &::before{
    display: block;
    content: '';
    background: url(${loginImage}) no-repeat center center;
    background-size: cover;
  }


`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
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
  &::after {
    content: "";
    /* height: 2px;
    width: 5%; */
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
`;

export const Button = styled.button`
  text-decoration: none;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  background-color: #fb1;
  border-radius: 4px;
  color: #764701;
  margin-top: 2rem;
  /* margin: 12px 8px; */
  cursor: pointer;
  transition: 0.1s;
  min-width: 8rem;
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
