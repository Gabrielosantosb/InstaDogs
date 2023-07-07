import React, { createContext, useEffect, useState } from "react";
import { View } from "react-native";
import { TOKEN_POST, USER_GET } from "../contants/endpoints";
import axios from "axios";


export const UserContext = createContext();
export const UserStorage = ({ children }) => {
    const [data, setData] = useState('')
    const [login,setLogin] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    

    const getUser = async(token) =>{
        const { url, options } = USER_GET(token);
        const response = await axios.get(url, options);
        setData(response.data)
        setLoading(true)
        console.log(data)
    }

    const userLogin = async (username, password) => {
        const { url, options } = TOKEN_POST({ username, password });
        const tokenResponse = await axios.get(url, options);
        const { token } = tokenResponse.data; // Extrai o token da resposta diretamente
        window.localStorage.setItem("token", token);
        getUser(token)
      };

  return <UserContext.Provider value={{userLogin}}>{children}</UserContext.Provider>;
};
