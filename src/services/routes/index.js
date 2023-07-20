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
import { ProtectedRoute } from "../../components/ProtectedRoute"
export const Navigation = () => {
  // const {login} = useContext(UserContext)
  // if (login === true) return <Navigate to ='/conta'/>
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="login/cadastro" element={<Register />} />
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
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
};
