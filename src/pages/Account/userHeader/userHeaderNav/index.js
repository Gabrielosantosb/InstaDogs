import React from "react";

import { useContext } from "react";
import { UserContext } from "../../../../Hooks/userContext";
import { ReactComponent as MyPhotos } from "../../../../assets/feed.svg";
import { ReactComponent as Statics } from "../../../../assets/estatisticas.svg";
import { ReactComponent as AddPhotos } from "../../../../assets/adicionar.svg";
import { ReactComponent as Logout } from "../../../../assets/sair.svg";
import { HeaderContainer } from "../../../../components/Header/styles";
import { ButtonNav } from "../../../../styles/global";

// import { Container } from './styles';

export const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);

  return (
    <HeaderContainer>
      <ButtonNav to="minhaConta/feed">
        <MyPhotos />
      </ButtonNav>

      <ButtonNav to="minhaConta/postar">
        <Statics />
      </ButtonNav>

      <ButtonNav to="minhaConta/estatisticas">
        <AddPhotos />
      </ButtonNav>

      <ButtonNav onClick={userLogout}>
        <Logout />
      </ButtonNav>
    </HeaderContainer>
  );
};

