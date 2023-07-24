import React, { useContext, useState } from "react";
import { ReactComponent as Loading } from "../../assets/carregando.svg";
import { ImageContainer, Subtitle, Title } from "../../Styles/global";

import { Button, FormContainer, LinkContainer, LostPassword } from "./styles";
import { Input } from "../form/input";
import {
  passwordValidator,
  usernameValidator,
  validateFields,
} from "../../common/validators";

import { UserContext } from "../../Hooks/userContext";
import { Error } from "../../common/error";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { userLogin, error, loading } = useContext(UserContext);

  const handleUsernameBlur = () => {
    if (usernameValidator(username, setErrorMessage)) {
      setErrorMessage("");
    }
  };

  const handlePasswordBlur = () => {
    if (passwordValidator(password, setErrorMessage)) {
      setErrorMessage("");
    }
  };

  const validate = () => {
    const isValid = validateFields(username, password, setErrorMessage);
    handlePasswordBlur();
    handleUsernameBlur();
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validate()) {
      return false;
    }
    userLogin(username, password);
  };

  return (
    <ImageContainer className="animeLeft">
      <FormContainer>
        <Title>Login</Title>
        <form onSubmit={handleSubmit}>
          <p>Usuário</p>
          <Input
            type="text"
            onChange={({ target }) => setUsername(target.value)}
            onBlur={handleUsernameBlur}
            value={username}
          />
          <p>Senha</p>
          <Input
            type="password"
            onChange={({ target }) => setPassword(target.value)}
            onBlur={handlePasswordBlur}
            value={password}
          />
          <Error error={error} />
          {loading ? <Loading /> : <Button type="submit">Entrar</Button>}
        </form>
        {/* <p style={{ color: Colors.red }}>{errorMessage}</p> */}
        <LinkContainer>
          <LostPassword to="cadastro">Perdeu a senha?</LostPassword>
          <Subtitle to="cadastro">Cadastre-se!</Subtitle>
        </LinkContainer>
      </FormContainer>
    </ImageContainer>
  );
};
