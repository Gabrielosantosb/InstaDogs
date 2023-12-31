import React from "react";

import { useContext } from "react";
import { UserContext } from "../../../../Hooks/userContext";
import { ReactComponent as MyPhotos } from "../../../../assets/feed.svg";
import { ReactComponent as Statics } from "../../../../assets/estatisticas.svg";
import { ReactComponent as AddPhotos } from "../../../../assets/adicionar.svg";
import { ReactComponent as Logout } from "../../../../assets/sair.svg";
import { HeaderContainer } from "../../../../components/Header/styles";
import { ButtonNav } from "../../../../Styles/global";

// import { Container } from './styles';

export const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);

  return (
    <HeaderContainer>
      <ButtonNav to="feed">
        <MyPhotos />
      </ButtonNav>

      <ButtonNav to="estatisticas">
        <Statics />
      </ButtonNav>

      <ButtonNav to="postar">
        <AddPhotos />
      </ButtonNav>

      <ButtonNav onClick={userLogout}>
        <Logout />
      </ButtonNav>
    </HeaderContainer>
  );
};

