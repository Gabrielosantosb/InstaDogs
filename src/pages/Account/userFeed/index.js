import React from "react";
import { Title } from "../../../Styles/global";

import { FeedModal } from "./FeedModal";
import { FeedPhotos } from "./FeedPhotos";
import { useState } from "react";

export const Feed = () => {
  const [modalPhoto, setModalPhoto] = useState(null);

  return (
    <>
      <Title>Feed</Title>
      {modalPhoto ? <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto}/>  : <></>}
      <FeedPhotos setModalPhoto={setModalPhoto}/>
    </>
  );
};
