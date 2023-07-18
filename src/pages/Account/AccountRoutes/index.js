import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Feed } from "../../../components/Feed";
import { UserPhotoPost } from "../userPhotoPost";
import { UserStats } from "../userStats";
import { UserHeaderNav } from "../userHeader/userHeaderNav";

export const Account = () => {
  return (
    <div className="animeLeft">
      <UserHeaderNav />
      <Routes>
        <Route path="minhaConta/feed" element={<Feed />} />
        <Route path="minhaConta/postar" element={<UserPhotoPost />} />
        <Route path="minhaConta/estatisticas" element={<UserStats />} />
      </Routes>
    </div>
  );
};
