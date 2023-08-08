import { ButtonNav, Divider, HeaderContainer, HomeIcon } from "./styles";
import { GlobalStyle } from "../../Styles/global";
import { ReactComponent as Dogs } from "../../assets/dogs.svg";
import { USER_GET } from "../../contants/endpoints";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Hooks/userContext";

const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <>
      <HeaderContainer>
        <GlobalStyle />
        <ButtonNav to="/home" end>
          <Dogs />
        </ButtonNav>

        {data ? (
          <ButtonNav to="/minhaConta">
            {data.nome} <HomeIcon />
          </ButtonNav>
        ) : (
          <ButtonNav to="/login">
            Login/Criar <HomeIcon />
          </ButtonNav>
        )}
      </HeaderContainer>
      <Divider />
    </>
  );
};

export default Header;
