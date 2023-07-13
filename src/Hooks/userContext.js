import React, { createContext, useEffect, useState } from "react";
import {
  TOKEN_POST,
  TOKEN_VALIDATE_POST,
  USER_GET,
} from "../contants/endpoints";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AES } from "crypto-js";

export const UserContext = createContext();
export const UserStorage = ({ children }) => {
  const [data, setData] = useState("");
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const autoLogin = async () => {
      const encryptedToken = window.localStorage.getItem("token");
      if (encryptedToken) {
        try {
          setError("");
          setLoading(true);
          const decryptedToken = AES.decrypt(
            encryptedToken,
            "secret-key" // Replace with your secret key
          ).toString();
          const { url, options } = TOKEN_VALIDATE_POST(decryptedToken);
          const response = await axios(url, options);
          if (response.status !== 200) {
            throw new Error("Invalid Token");
          }
          await getUser(decryptedToken);
        } catch (error) {
          userLogout();
          console.error("Error:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    autoLogin();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 3000);
  }, [error]);

  const getUser = async (token) => {
    const { url, options } = USER_GET(token);
    const response = await axios.get(url, options);
    setData(response.data);
    console.log(data.nome);
  };

  const userLogin = async (username, password) => {
    const { url, options } = TOKEN_POST({ username, password });
    try {
      setError("");
      setLoading(true);
      const tokenResponse = await axios.post(url, { username, password }, options);
      if (!tokenResponse) {
        throw new Error(`Error: ${tokenResponse.statusText}`);
      }
      const { status } = tokenResponse;
      const { token } = tokenResponse.data;

      if (status === 403) {
        setError("Access Denied");
      }

      if (status === 200) {
        console.log("Logged in");
        const encryptedToken = AES.encrypt(token, "secret-key").toString();
        window.localStorage.setItem("token", encryptedToken);
        getUser(token);
        navigate("/home");
      } else {
        setError(true);
        console.log("Login failed");
      }
    } catch (error) {
      setError(error.message);
      setLogin(false);
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = async () => {
    setData("");
    setError("");
    setLoading(false);
    setLogin("");
    window.localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider
      value={{ userLogin, data, userLogout, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
