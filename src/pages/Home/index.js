import React, { useContext } from "react";
import { Feed } from "../Account/userFeed";
import { GlobalContainer, NormalTitle } from "../../Styles/global";
import { UserContext } from "../../Hooks/userContext";

export const Home = () => {
  const { login } = useContext(UserContext);
  
  return (
    <GlobalContainer className="animeLeft">
      {login ? (
        <Feed />
      ) : (
        <NormalTitle style={{ display: "flex", justifyContent: "center", height: "100vh",fontSize:'3rem', fontFamily:  "Spectral "  }}>
          Faça login para continuar!
        </NormalTitle>
      )}
    </GlobalContainer>
  );
};
