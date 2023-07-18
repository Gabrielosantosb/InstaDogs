import React, { useState, useContext, useEffect } from "react";
import { ImageContainer, Title } from "../../styles/global";
import { Button, FormContainer } from "../../components/Login/styles";
import { Input } from "../../components/form/input";
import { Error } from "../../common/error";
import { ReactComponent as Loading } from "../../assets/carregando.svg";
import { useFetch } from "../../Hooks/useFetch";
import { UserContext } from "../../Hooks/userContext";
import {
  createPassword,
  emailValidator,
  usernameValidator,
  validateFields,
} from "../../common/validators";
import { Colors } from "../../styles/colors";
import axios from "axios";
import { USER_POST } from "../../contants/endpoints";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { userLogin } = useContext(UserContext);
  const { loading, error, request } = useFetch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // if (validate()) {
      const { url, options } = USER_POST({
        username: username,
        password: password,
        email: email,
      });
      const {response} = await request(url, options);
      if (response.ok) userLogin(username, password);
      

  };

  const handleUsernameBlur = () => {
    if (usernameValidator(username, setUsernameError)) {
      setUsernameError("");
    }
  };

  const handlePasswordBlur = () => {
    if (createPassword(password, setPasswordError)) {
      setPasswordError("");
    }
  };

  const handleEmailBlur = () => {
    if (emailValidator(email, setEmailError)) {
      setEmailError("");
    }
  };

  const validate = () => {
    const isValid = validateFields(username, password, setEmailError);
    handleUsernameBlur();
    handlePasswordBlur();
    handleEmailBlur();
    return isValid;
  };

  return (
    <ImageContainer className="animeLeft">
      <FormContainer>
        <Title>Cadastre-se</Title>
        <form onSubmit={handleSubmit}>
          <p>Usuário</p>
          <Input
            type="text"
            value={username}
            onBlur={handleUsernameBlur}
            onChange={({ target }) => setUsername(target.value)}
          />
          <p style={{ color: Colors.red }}>{usernameError}</p>
          <p>E-mail</p>
          <Input
            type="text"
            value={email}
            onBlur={handleEmailBlur}
            onChange={({ target }) => setEmail(target.value)}
          />
          <p style={{ color: Colors.red }}>{emailError}</p>
          <p>Senha</p>
          <Input
            type="password"
            value={password}
            onBlur={handlePasswordBlur}
            onChange={({ target }) => setPassword(target.value)}
          />
          <p style={{ color: Colors.red }}>{passwordError}</p>
          <Error error={error} />
          {loading ? <Loading /> : <Button type="submit">Entrar</Button>}
        </form>
      </FormContainer>
    </ImageContainer>
  );
};

