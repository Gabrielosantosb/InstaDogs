import React, { useContext } from "react";

import { GlobalContainer, NormalTitle } from "../../Styles/global";
import { UserContext } from "../../Hooks/userContext";
import { Feed } from "../Feed";

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
