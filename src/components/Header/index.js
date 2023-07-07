import { ButtonNav, Divider, HeaderContainer, HomeIcon } from "./styles";
import { GlobalStyle } from "../../styles/global";
import { ReactComponent as Dogs } from "../../assets/dogs.svg";
import { USER_GET } from "../../contants/endpoints";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Hooks/userContext";

const Header = () => {
  const[userData, setUserData] = useState('')
  const user = useContext(UserContext)
  
  return (
    <>
      <HeaderContainer>
        <GlobalStyle />
        <ButtonNav to="/" end>
          <Dogs />
        </ButtonNav>

        {userData ? (
          <ButtonNav to="/minhaConta">
            {userData} <HomeIcon />
          </ButtonNav>
        ) : (
          <ButtonNav to="/login">
            {userData} <HomeIcon />
          </ButtonNav>
        )}
      </HeaderContainer>
      <Divider />
    </>
  );
};

export default Header;
