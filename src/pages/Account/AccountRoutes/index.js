import React from "react";
import { Route, Routes } from "react-router-dom";

import { UserPhotoPost } from "../userPhotoPost";
import { UserStats } from "../userStats";
import { UserHeaderNav } from "../userHeader/userHeaderNav";
import { NotFound } from "../../../components/NotFound";
import { Feed } from "../../Feed";
import { UserFeed } from "../userFeed";
import { useContext } from "react";
import { UserContext } from "../../../Hooks/userContext";

export const Account = () => {
  const {data} = useContext(UserContext)
  return (
    <div className="animeLeft">
      <UserHeaderNav />
      <Routes>
        <Route path="/feed" element={<Feed user={data.id} />} />
        <Route path="/postar" element={<UserPhotoPost />} />
        <Route path="/estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
