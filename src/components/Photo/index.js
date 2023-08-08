import React from "react";
import { View } from "react-native";
import { useParams } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";
import { useEffect } from "react";
import { PHOTOS_GET, PHOTO_PAGE } from "../../contants/endpoints";
import { Error } from "../../common/error";
import { Loading } from "../../common/loading";
import { PhotoContent } from "../PhotoContent";
import { MainContainer } from "./styles";

// import { Container } from './styles';

export const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    // console.log('Data: ' + data)
    const { url, options } = PHOTO_PAGE(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <MainContainer>
        <PhotoContent data={data} singlePage={true} />
      </MainContainer>
    );
  else return null;
};
