import React, { createContext, useEffect, useState } from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "../contants/endpoints";
import axios from "axios";

export const UserContext = createContext();
export const UserStorage = ({ children }) => {
  const [data, setData] = useState("");
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    const autoLogin = async () => {
      const token = window.localStorage.getItem('token');
      if (token) {
        const { url, options } = TOKEN_VALIDATE_POST(token);
        const response = await axios.get(url, options);
        // console.log(response)
        console.log('teste');
      }
    };
    autoLogin();
  }, []);
  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const response = await axios.get(url, options);
    setData(response.data);
    console.log(data.nome);
  };

  const userLogin = async (username, password) => {
    const { url, options } = TOKEN_POST({ username, password });
    try {
      const tokenResponse = await axios.post(
        url,
        {
          username,
          password,
        },
        options
      );
      const { status } = tokenResponse;
      const { token } = tokenResponse.data;
      
      if (status === 200) {
        console.log('Logado ');
        window.localStorage.setItem("token", token);
        getUser(token);
      } else {
        setError(true);
        console.log('Login failed');
      }
    } catch (error) {
      setError(true);
      console.log('Error :', error);
    }
  };

  return (
    <UserContext.Provider value={{ userLogin, data }}>
      {children}
    </UserContext.Provider>
  );
};
