import React from "react";
import { Route, Routes } from "react-router-dom";
import { Feed } from "../userFeed";
import { UserPhotoPost } from "../userPhotoPost";
import { UserStats } from "../userStats";
import { UserHeaderNav } from "../userHeader/userHeaderNav";

export const Account = () => {
  return (
    <div className="animeLeft">
      <UserHeaderNav />
      <Routes>
        <Route path="/feed" element={<Feed />} />
        <Route path="/postar" element={<UserPhotoPost />} />
        <Route path="/estatisticas" element={<UserStats />} />
      </Routes>
    </div>
  );
};
