import React from "react";
import { Feed } from "../Account/userFeed";
import { GlobalContainer } from "../../styles/global";

export const Home = () => {
  return (
    <GlobalContainer className="animeLeft">

      <Feed/>
      <p>Home</p>
    </GlobalContainer>
    
  );
};


