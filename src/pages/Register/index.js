import React, { useState, useContext, useEffect } from "react";
import { ImageContainer, Title } from "../../styles/global";
import { Button, FormContainer } from "../../components/Login/styles";
import { Input } from "../../components/form/input";
import { Error } from "../../common/error";
import { ReactComponent as Loading } from "../../assets/carregando.svg";
import { UserContext } from "../../Hooks/userContext";
import {
  createPassword,
  emailValidator,
  usernameValidator,
} from "../../common/validators";
import { Colors } from "../../styles/colors";
import axios from "axios";
import { USER_POST } from "../../contants/endpoints";
import { useFetch } from "../../Hooks/useFetch";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { userLogin, error } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setErrorMessage("");
    }, 3000);
  }, [errorMessage]);

  // ##TODO com axios nao funciona, teste depois
  // ##TODO Fazer isso com hook useFetch
  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username,
      password: password,
      email: email,
    });

    try {
      const response = await fetch(url, options);
      if (response.status === 200) {

        userLogin(username, password);

      } else if (response.status === 403) {
        setErrorMessage("Usuário já existente");

      } else if (response.status === 406) {
        console.log(response)
        setErrorMessage("Dados incompletos");
      }
    } catch (error) {
      setErrorMessage("Falha na API");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUsernameBlur = () => {
    if (usernameValidator(username, setErrorMessage)) {
      setErrorMessage("");
    }
  };

  const handlePasswordBlur = () => {
    if (createPassword(password, setErrorMessage)) {
      setErrorMessage("");
    }
  };

  const handeEmailBlur = () => {
    if (emailValidator(email, setErrorMessage)) {
      setErrorMessage("");
    }
  };

  // const validate = () => {
  //   const isValid = validateFields(username, password, setErrorMessage);
  //   handleUsernameBlur();
  //   handlePasswordBlur();
  //   handeEmailBlur();
  //   return isValid;
  // };

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
          <p>E-mail</p>
          <Input
            type="text"
            value={email}
            onBlur={handeEmailBlur}
            onChange={({ target }) => setEmail(target.value)}
          />
          <p>Senha</p>
          <Input
            type="password"
            value={password}
            onBlur={handlePasswordBlur}
            onChange={({ target }) => setPassword(target.value)}
          />
          <Error error={error} />
          {/* <p style={{ color: Colors.red }}>{errorMessage}</p> */}
          {isLoading ? <Loading /> : <Button type="submit">Entrar</Button>}
        </form>
      </FormContainer>
    </ImageContainer>
  );
};
