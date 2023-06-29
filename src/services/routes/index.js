import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../../components/Header";
import Home from "../../components/Home";
import { Login } from "../../components/Login";
import Footer from "../../components/Footer";
import { LoginForm } from "../../components/Login/LoginForm";
import { Register } from "../../components/Register";
import { ResetPassword } from "../../components/ResetPassword";
;

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route  path="login/cadastro" element={<LoginForm/>}/>
        <Route  path="cadastro" element={<Register/>}/>
        <Route  path="resetar" element={<ResetPassword/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};


