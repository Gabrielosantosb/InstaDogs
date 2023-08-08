import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../Hooks/userContext";
import { RESET_PASSWORD } from "../../../contants/endpoints";
import { Input } from "../../../components/form/input";
import { Loading } from "../../../common/loading";
import { Error } from "../../../common/error";
import { Button } from "../../../components/Login/styles";
import { NewPasswordCointainer } from "./styles";
import { ButtonNav, ImageContainer, Title } from "../../../Styles/global";
import { useFetch } from "../../../Hooks/useFetch";

export const NewPassword = () => {
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");
  const [password, setPassword] = useState("");
  const { request, loading, error } = useFetch();
  // const { error, loading } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const keyParam = params.get("key");
    const loginParam = params.get("login");

    if (keyParam) setKey(keyParam);
    if (loginParam) setLogin(loginParam);
  }, []);

  useEffect(() => {
    console.log(password);
    console.log(login);
    console.log(key);
  }, [password]);

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = RESET_PASSWORD({
      login,
      key,
      password: password,
    });

    const response = await request(url, options);

    if (response.ok) {
      navigate("/login");
    }
  }

  return (
    <ImageContainer className="animeLeft">
      <Title>Resete a Senha</Title>
      <NewPasswordCointainer>
        <form onSubmit={handleSubmit}>
          <Input
            label="Nova Senha"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {loading ? <Loading /> : <Button>Resetar</Button>}
        </form>
        <Error error={error} />
      </NewPasswordCointainer>
    </ImageContainer>
  );
};
