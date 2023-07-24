import React from "react";
import { View } from "react-native";
import { UserHeader } from "../userHeader";
import { Title } from "../../../Styles/global";

// import { Container } from './styles';

export const UserStats = () => {
  return (
    <section className="animeLeft">
      <UserHeader>
        <Title>Estatisticas</Title>
      </UserHeader>
    </section>
  );
};
