import React, { useEffect, useState } from "react";
import { ReactComponent as Loading } from "../../assets/carregando.svg";
import { ButtonNav } from "../../styles/global";
import axios from "axios";
import { Button, FormContainer} from "./styles";
import { Input } from "../form/input";

//'https://dogsapi.origamid.dev/json/jwt-auth'
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const [disableButton, setDisableButton] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true)
      const response = await axios.post(
        "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setLoading(false)
      const { data, status } = response;

      console.log("Status:", status);
      console.log("Data:", data);
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
          {/* <button type="submit">Entrar</button> */}
        {loading ? <Loading/> : <></>}
        </form>
      </FormContainer>
      {/* <ButtonNav to="cadastro">Tela de cadastro</ButtonNav> */}
    </>
  );
};
