import React from "react";
import {
  AtributesLi,
  AtributesUl,
  AuthorContainer,
  Details,
  PhotoContentContainer,
  PhotoContentImg,
} from "./styles";
import { ButtonNav, Title } from "../../Styles/global";
import { Visualizate } from "../../pages/Account/userFeed/styles";
import { PhotoComments } from "../PhotoComments";
import { Link } from "react-router-dom";
import { useEffect } from "react";

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
        <AtributesUl>
          <AtributesLi>{photo.peso}kg</AtributesLi>
          <AtributesLi>{photo.idade} anos</AtributesLi>
        </AtributesUl>
        <PhotoComments id={photo.id} comments={comments} />
      </Details>
    </PhotoContentContainer>
  );
};
