import React, { useState } from "react";
import { useEffect } from "react";
import { View } from "react-native";
import { Input } from "../../../components/form/input";
import { Button } from "../../../components/Login/styles";
import { NewPasswordCointainer } from "./styles";

// import { Container } from './styles';

export const NewPassword = () => {
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  return (
    <NewPasswordCointainer className="animeLeft">
      <div>
        <p>{key}</p>
        <p>{login}</p>
        <Input
          label="Nova senha: "
          type="password"
          name="password"
          width={30}
        />
        <Button>Resetar</Button>
      </div>
    </NewPasswordCointainer>
  );
};
