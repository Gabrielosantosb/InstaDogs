import React, { useEffect } from "react";
import { FeedModalContainer } from "../styles";
import { useFetch } from "../../../../Hooks/useFetch";
import { PHOTO_GET } from "../../../../contants/endpoints";
import { Error } from "../../../../common/error";
import { Loading } from "../../../../common/loading";
import {PhotoContent} from "../../../../components/PhotoContent"

export const FeedModal = ({ photo }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  return (
    <FeedModalContainer className="animeLeft">
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </FeedModalContainer>
  );
};
