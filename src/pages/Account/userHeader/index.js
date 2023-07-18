import React from "react";
import { Title } from "../../../styles/global";
import { UserHeaderNav } from "./userHeaderNav";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
export const UserHeader = () => {
  const [title, setTitle] = useState("");
  const location = useLocation();
  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/minhaConta/feed":
        setTitle("Feed");
        break;

      case "/minhaConta/postar":
        setTitle("Postar");
        break;
      case "/minhaConta/estatisticas":
        setTitle("Estatisticas");
        break;
      default:
        setTitle('Minha Conta')
    }
  }, [location]);
  return (
    <div>
      <header>
        <Title>{title}</Title>
        {/* <UserHeaderNav/> */}
      </header>
    </div>
  );
};
