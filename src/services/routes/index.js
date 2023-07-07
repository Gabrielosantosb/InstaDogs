import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../../components/Header";

import { Login } from "../../components/Login";
import Footer from "../../components/Footer";
import { LoginForm } from "../../components/Login/LoginForm";
import { Register } from "../../pages/Register";
import { ResetPassword } from "../../pages/ResetPassword";
import { Account } from "../../pages/Account";
import { Home } from "../../pages/Home";
import { UserStorage } from "../../Hooks/userContext";
export const Navigation = () => {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="login/cadastro" element={<LoginForm />} />
          <Route path="minhaConta" element={<Account />} />
          <Route path="cadastro" element={<Register />} />
          <Route path="resetar" element={<ResetPassword />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
};
