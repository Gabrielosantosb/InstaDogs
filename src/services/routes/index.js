import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "../../components/Header";

import { Login } from "../../pages/Login";
import Footer from "../../components/Footer";
import { Register } from "../../pages/Register";
import { Home } from "../../pages/Home";
import { ResetPassword } from "../../pages/ResetPassword";
import { Account } from "../../pages/Account/AccountRoutes";
import { UserStorage } from "../../Hooks/userContext";
import { ProtectedRoute } from "../../components/ProtectedRoute";
import { Photo } from "../../components/Photo";
import { UserProfile } from "../../pages/Account/userProfile";
import { NotFound } from "../../components/NotFound";
import { NewPassword } from "../../pages/ResetPassword/NewPassword";
import { App, AppBody } from "../../Styles/global";

export const Navigation = () => {
  return (
    <App>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <AppBody>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} end />
              <Route path="login" element={<Login />} />
              <Route path="login/cadastro" element={<Register />} />
              <Route path="login/perdeu" element={<ResetPassword />} />
              <Route path="login/resetar/*" element={<NewPassword />} />
              <Route
                path="minhaConta/*"
                element={
                  <ProtectedRoute>
                    <Account />
                  </ProtectedRoute>
                }
              />
              {/* <Route path="/minhaConta/*" element={<Account />} /> */}
              <Route path="resetar" element={<ResetPassword />} />
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AppBody>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </App>
  );
};
