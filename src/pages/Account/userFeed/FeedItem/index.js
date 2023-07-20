import React from "react";
import { FeedPhoto, Image, Visualizate } from "../styles";

export const FeedPhotosItem = ({ photo }) => {
  return (
    <FeedPhoto>
      <Image src={photo.src} alt={photo.title} />
      <Visualizate>{photo.acessos}</Visualizate>
    </FeedPhoto>
  );
};


