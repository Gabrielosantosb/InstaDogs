import React from "react";
import {
  AtributesLi,
  AtributesUl,
  AuthorContainer,
  Details,
  PhotoContentContainer,
  PhotoContentImg,
  SingleDetails,
  SinglePageContainer,
  SinglePhotoContentImg,
} from "./styles";
import { ButtonNav, Title } from "../../Styles/global";
import { Visualizate } from "../../pages/Account/userFeed/styles";
import { PhotoComments } from "../PhotoComments";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../Hooks/userContext";
import PhotoDelete from "../Photo/PhotoDelete";

// import { Container } from './styles';

export const PhotoContent = ({ data, singlePage }) => {
  const user = useContext(UserContext);
  const { photo, comments } = data;

  return (
    <>
      {singlePage ? (
        <SinglePageContainer>
          <>
            <SinglePhotoContentImg src={photo.src} alt={photo.Title} />
          </>
          <SingleDetails>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <></>
            )}
            <AuthorContainer>
              <Title>{photo.author}</Title>
              <p>Views: {photo.acessos}</p>
            </AuthorContainer>
            <h1>
              <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
            </h1>
            <AtributesUl>
              <AtributesLi>{photo.peso}kg</AtributesLi>
              <AtributesLi>{photo.idade} anos</AtributesLi>
            </AtributesUl>
            <PhotoComments id={photo.id} comments={comments} />
          </SingleDetails>
        </SinglePageContainer>
      ) : (
        <PhotoContentContainer>
          <>
            <PhotoContentImg src={photo.src} alt={photo.Title} />
          </>
          <Details>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <></>
            )}
            <AuthorContainer>
              <Title>{photo.author}</Title>
              <p>Views: {photo.acessos}</p>
            </AuthorContainer>
            <h1>
              <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
            </h1>
            <AtributesUl>
              <AtributesLi>{photo.peso}kg</AtributesLi>
              <AtributesLi>{photo.idade} anos</AtributesLi>
            </AtributesUl>
            <PhotoComments id={photo.id} comments={comments} />
          </Details>
        </PhotoContentContainer>
      )}
    </>
  );
};
