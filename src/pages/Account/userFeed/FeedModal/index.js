import React, { useEffect } from "react";
import { FeedModalContainer } from "../styles";
import { useFetch } from "../../../../Hooks/useFetch";
import { PHOTO_GET } from "../../../../contants/endpoints";
import { Error } from "../../../../common/error";
import { Loading } from "../../../../common/loading";
import { PhotoContent } from "../../../../components/PhotoContent";

export const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      setModalPhoto(false);
    }
  };

  return (
    <FeedModalContainer className="animeLeft" onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </FeedModalContainer>
  );
};
