import React from "react";
import { Input } from "../../components/form/input";
import { Button, FormContainer } from "../../pages/Login/styles";
import { ImageContainer, Title } from "../../Styles/global";
import { useState } from "react";
import { usernameValidator } from "../../common/validators"; 
import { Error } from "../../common/error";
import { useFetch } from "../../Hooks/useFetch";
import { LOST_PASSWORD } from "../../contants/endpoints";
import { Loading } from "../../common/loading";
import { Colors } from "../../Styles/colors";

export const ResetPassword = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const { data, loading, request } = useFetch();

  const handleUsernameBlur = () => {
    if (usernameValidator(user, setError)) {
      setError("");
    }
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const { url, options } = LOST_PASSWORD({
        login: user,
        url: window.location.href.replace("perdeu", "resetar"),
      });
      request(url, options);
    } catch (error) {
      setError("Usuário não achado");
    }
  };

  return (
    <ImageContainer className="animeLeft">
      <FormContainer>
        <Title>Perdeu a senha?</Title>
        {data ? (
          <p style={{ color: Colors.Bootstrap.success, fontSize: 16 }}>
            {data}
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <Input
              label="Email/Usuário"
              type="text"
              name="email"
              onChange={({ target }) => setUser(target.value)}
              onBlur={handleUsernameBlur}
            />
            <Error error={error} />
            {loading ? (
              <Loading />
            ) : (
              <Button type="submit">Enviar Email</Button>
            )}
          </form>
        )}
      </FormContainer>
    </ImageContainer>
  );
};
