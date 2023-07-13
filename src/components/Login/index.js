import React, { useContext, useState } from "react";
import { ReactComponent as Loading } from "../../assets/carregando.svg";
import { ButtonNav, Subtitle, Title } from "../../styles/global";
import axios from "axios";
import {
  Button,
  FormContainer,
  LinkContainer,
  LoginContainer,
  LostPassword,
  Register,
} from "./styles";
import { Input } from "../form/input";
import {
  emailValidator,
  passwordValidator,
  usernameValidator,
} from "../../common/validators";
import { Colors } from "../../styles/colors";
import { UserContext } from "../../Hooks/userContext";
import { Error } from "../../common/error";

export const Login = () => {
  const [userData, setUserData] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { userLogin, error, loading } = useContext(UserContext);

  const validateFields = () => {
    const usernameResult = usernameValidator(username, setErrorMessage);
    const passwordResult = passwordValidator(password, setErrorMessage);
    if (!usernameResult || !passwordResult) {
      return false;
    }
    return true;
  };

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateFields()) {
      return false;
    }
    userLogin(username, password);
  };

  return (
    <section className="animeLeft">
      <LoginContainer>
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
          <p style={{ color: Colors.red }}>{errorMessage}</p>
        </FormContainer>

        <LinkContainer>
          <LostPassword to="cadastro">Perdeu a senha?</LostPassword>
          <Subtitle to="cadastro">Cadastre-se!</Subtitle>
        </LinkContainer>
      </LoginContainer>
    </section>
  );
};
