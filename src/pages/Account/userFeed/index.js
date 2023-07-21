import React from "react";
import { Title } from "../../../styles/global";
import { UserHeader } from "../userHeader";
import { FeedModal } from "./FeedModal";
import { FeedPhotos } from "./FeedPhotos";
import { useState } from "react";
import { useEffect } from "react";

export const Feed = () => {
  const [modalPhoto, setModalPhoto] = useState(null);

  return (
    <>
      <Title>Feed</Title>
      {modalPhoto ? <FeedModal photo={modalPhoto}/> : <></>}
      <FeedPhotos setModalPhoto={setModalPhoto}/>
    </>
  );
};
