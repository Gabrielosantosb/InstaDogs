import React from "react";
import { View } from "react-native";
import { useParams } from "react-router-dom";

import { Title } from "../../../Styles/global";
import { Feed } from "../../Feed";

// import { Container } from './styles';

export const UserProfile = () => {
  const { user } = useParams();

  return (
    <div>
      <Title>{user}</Title>
      <Feed user={user} />
    </div>
  );
};
