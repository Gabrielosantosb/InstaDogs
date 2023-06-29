import React from "react";
import { ButtonNav, Divider, HeaderContainer, HomeIcon } from "./styles";
import { GlobalStyle } from "../../styles/global";
import { ReactComponent as Dogs } from "../../assets/dogs.svg";


const Header = () => {
  return (
    <>
      <HeaderContainer>
        <GlobalStyle />
        <ButtonNav to="/" end>
          <Dogs />
        </ButtonNav>
        <ButtonNav to="/login">
          Login/Criar
          <HomeIcon />
        </ButtonNav>
      </HeaderContainer>
      <Divider />
    </>
  );
};

export default Header;
