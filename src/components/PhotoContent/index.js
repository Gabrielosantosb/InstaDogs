import React from "react";
import { AuthorContainer, Details, PhotoContentContainer, PhotoContentImg } from "./styles";
import { ButtonNav, Title } from "../../styles/global";
import { Visualizate } from "../../pages/Account/userFeed/styles";
import { PhotoComments } from "../PhotoComments";
import { Link } from "react-router-dom";

// import { Container } from './styles';

export const PhotoContent = ({ data }) => {
  const { photo, comments } = data;

  return (
    <PhotoContentContainer>
      <div>
        <PhotoContentImg src={photo.src} alt={photo.Title} />
      </div>
      <Details>
        <AuthorContainer>
          <Title>{photo.author}</Title>
          <p>Views:{photo.acessos}</p>
        </AuthorContainer>
        <h1>
          <Link to={`/foto/&{photo.id}`}>{photo.title}</Link>
        </h1>
        <div>
          <p>{photo.peso}kg</p>
          <p>{photo.idade} anos</p>
        </div>
      </Details>
    </PhotoContentContainer>

    //   <PhotoContentContainer>
    //     <PhotoContentImg src={photo.src} alt={photo.title} />
    //     <Details />
    //     <div>
    //       <p>
    //         <ButtonNav to={`/perfil/${photo.author}`}>@{photo.author}</ButtonNav>
    //         <p>{photo.acessos}</p>
    //         <Title to={`/foto/${photo.id}`}>{photo.title}</Title>
    //         {/* <ButtonNav to={`/foto/${photo.id}`}>{photo.title}</ButtonNav> */}
    //       </p>
    //       <ul>
    //         <li>{photo.peso}</li>
    //         <li>{photo.idade}</li>
    //       </ul>
    //       <PhotoComments id={photo.id} comments= {comments}/>
    //     </div>
    //   </PhotoContentContainer>
    // );
  );
};
