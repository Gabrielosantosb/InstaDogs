import React from "react";
import { Link } from "react-router-dom";
import { ButtonContainer, ButtonNav, HeaderContainer } from "./styles";
// import { Container } from './styles';

const Header = () => {
    return (
      <HeaderContainer>
        <ButtonNav to="/" end>
          Home
        </ButtonNav>
  
        <ButtonNav to="/login">Login/Cadastro</ButtonNav>
      </HeaderContainer>
    );
  };
export default Header;
