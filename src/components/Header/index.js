import { ButtonNav, Divider, HeaderContainer, HomeIcon } from "./styles";
import { GlobalStyle } from "../../styles/global";
import { ReactComponent as Dogs } from "../../assets/dogs.svg";
import { USER_GET } from "../../contants/endpoints";
import axios from "axios";
import { useEffect, useState } from "react";

const Header = () => {
  const[userData, setUserData] = useState('')
  const refresh = () => window.location.reload(true)

  useEffect(() => {
    getToken();
  }, [window.localStorage]);

  const getToken = async () => {
    const token = window.localStorage.getItem("token");
    const { url, options } = USER_GET(token);
    if (!token) setUserData("");
    if (token) {
      const tokenReponse = await axios.get(url, options);
      const { data } = tokenReponse;
      setUserData(data.nome);
    }
  };

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
