import React, { useContext, useEffect, useState } from "react";
import { ReactComponent as Loading } from "../../assets/carregando.svg";
import { ButtonNav } from "../../styles/global";
import axios from "axios";
import { Button, FormContainer } from "./styles";
import { Input } from "../form/input";
import { emailValidator, passwordValidator, usernameValidator } from "../../common/validators";
import { Colors } from "../../styles/colors";
import { TOKEN_POST, USER_GET } from "../../contants/endpoints";
import { UserContext } from "../../Hooks/userContext";

export const Login = () => {
  const [userData, setUserData] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const {userLogin} = useContext(UserContext)
  

  // Timeout para set error
  useEffect(() => {
    setTimeout(() => {
      setErrorMessage('');
    }, 3000);
  }, [errorMessage]);


  const validateFields = () => {
    const usernameResult = usernameValidator(username, setErrorMessage);
    const emailResult = emailValidator();
    const passwordResult = passwordValidator(password, setErrorMessage);
    if (!usernameResult) {
      return false;
    }
    if (!passwordResult) {
      return false;
    }
    return true;
  };


  // #TODO AJUSTAR
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateFields()) {
      return false;
    }
    userLogin(username, password)
  
  };
  
  return (
    <>
      <FormContainer>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <p>Usuário</p>
          <Input
            type="text"
            onChange={({ target }) => setUsername(target.value)}
            value={username}
          />
          <p>Senha</p>
          <Input
            type="password"
            onChange={({ target }) => setPassword(target.value)}
            value={password}
          />

          <Button type="submit">Entrar</Button>
          {loading ? <Loading /> : <></>}
        </form>
        <p style={{ color: Colors.red }}>{errorMessage}</p>
      </FormContainer>
      {/* <ButtonNav to="cadastro">Tela de cadastro</ButtonNav> */}
    </>
  );
};
