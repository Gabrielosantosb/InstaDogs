import React, { useEffect, useState } from "react";
import { ReactComponent as Loading } from "../../assets/carregando.svg";
import { ButtonNav } from "../../styles/global";
import axios from "axios";
import { Button, FormContainer } from "./styles";
import { Input } from "../form/input";
import { emailValidator, passwordValidator, usernameValidator } from "../../common/validators";
import { Colors } from "../../styles/colors";
import { TOKEN_POST, USER_GET } from "../../contants/endpoints";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  // Timeout para set error
  useEffect(() => {
    setTimeout(() => {
      setErrorMessage('');
    }, 3000);
  }, [errorMessage]);

  // Caso o usuario já esteja no localStorage

    useEffect(() =>{
      const token = window.localStorage.getItem('token')
        if(token){
          getUser(token)
        }
    },[])

  const getUser = async(token) =>{
    const {url, options} = USER_GET(token)
    const response = await axios.get(url, options)
    const {data} = response
    console.log(data)
  }
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

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!validateFields()) {
      return false;
    }
  
    const { url, options } = TOKEN_POST({
      username: username,
      password: password,
    });
  
    try {
      setLoading(true);
      const response = await axios.post(url, {
        username,
        password,
      }, options);
      setLoading(false);
      const { data, status } = response;
  
      console.log("Status:", status);
      console.log("Data:", data);
  
      // Armazena o token no localStorage
      window.localStorage.setItem('token', data.token);
      getUser(data.token)
    } catch (error) {
      console.error(error);
    }
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
          {loading ? <Loading /> : null}
        </form>
        <p style={{ color: Colors.red }}>{errorMessage}</p>
      </FormContainer>
      {/* <ButtonNav to="cadastro">Tela de cadastro</ButtonNav> */}
    </>
  );
};
