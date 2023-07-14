import React, { useState, useContext } from "react";
import { ImageContainer, Title } from "../../styles/global";
import { Button, FormContainer } from "../../components/Login/styles";
import { Input } from "../../components/form/input";
import { Error } from "../../common/error";
import { UserContext } from "../../Hooks/userContext";
import { validateFields } from "../../common/validators";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { userLogin, error, loading } = useContext(UserContext);

  const validate = () => {
    const isValid = validateFields(username, password, setErrorMessage);
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) {
      return false;
    }
    userLogin(username, password);
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
            onChange={({ target }) => setUsername(target.value)}
          />
          <p>E-mail</p>
          <Input
            type="text"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <p>Senha</p>
          <Input
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          {error && <Error error={error} />}
          <Button type="submit">Cadastrar</Button>
        </form>
      </FormContainer>
    </ImageContainer>
  );
};
