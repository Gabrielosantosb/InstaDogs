import React from "react";
import { Title } from "../../../styles/global";
import { UserHeader } from "../userHeader";
import { FeedModal } from "./FeedModal";
import { FeedPhotos } from "./FeedPhotos";

export const Feed = () => {
  return (
    <>
    <Title>Feed</Title>
      <FeedModal/>
      <FeedPhotos/>
    </>
  );
};
