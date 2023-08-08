import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../../components/Header";

import { Login } from "../../components/Login";
import Footer from "../../components/Footer";
import { Register } from "../../pages/Register";
import { ResetPassword } from "../../pages/ResetPassword";
import { Account } from "../../pages/Account/AccountRoutes";
import { Home } from "../../pages/Home";
import { UserContext, UserStorage } from "../../Hooks/userContext";
import { ProtectedRoute } from "../../components/ProtectedRoute";
import { Photo } from "../../components/Photo";
import { UserProfile } from "../../pages/Account/userProfile";
import { NotFound } from "../../components/NotFound";
import { LostPassword } from "../../components/Login/styles";
import { NewPassword } from "../../pages/ResetPassword/NewPassword";
import { App, AppBody } from "../../Styles/global";
export const Navigation = () => {
  // const {login} = useContext(UserContext)
  // if (login === true) return <Navigate to ='/conta'/>
  return (
    <App>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <AppBody>
            <Routes>
              <Route path="/home" element={<Home />} />
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
