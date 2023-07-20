import React from "react";
import { FeedPhoto, Image } from "../styles";


export const FeedPhotosItem = ({photo}) => {
  return (
    <FeedPhoto>
        <Image src={photo.src} alt={photo.title}/>
        <span>{photo.acessos}</span>

     
    </FeedPhoto>
  );
};
