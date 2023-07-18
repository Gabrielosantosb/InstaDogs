import React from "react";
import { View } from "react-native";
import { UserHeader } from "../userHeader";
import { Title } from "../../../styles/global";

// import { Container } from './styles';

export const UserPhotoPost = () => {
  return (
    <section className="animeLeft">
      <UserHeader>
        <Title>Postar foto</Title>
      </UserHeader>
    </section>
  );
};
