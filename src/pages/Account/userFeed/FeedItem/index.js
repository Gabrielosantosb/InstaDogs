import React from "react";
import { FeedPhoto, Image, Visualizate } from "../styles";
import { ReactComponent as VisualizeSVG } from "../../../../assets/visualizacao.svg"

export const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  
  const setPhoto = () =>{
    setModalPhoto(photo)

  }
  
  return (
    <FeedPhoto onClick={setPhoto}>
      <Image src={photo.src} alt={photo.title} />
      <Visualizate>
        <VisualizeSVG />
        {photo.acessos}
      </Visualizate>
    </FeedPhoto>
  );
};
