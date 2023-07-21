import React from "react";
import { FeedPhotosItem } from "../FeedItem";
import { useFetch } from "../../../../Hooks/useFetch";
import { useEffect } from "react";
import { PHOTOS_GET } from "../../../../contants/endpoints";
import { Error } from "../../../../common/error";
import { Loading } from "../../../../common/loading";
import { FeedContainer } from "../styles";

export const FeedPhotos = ({ setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const getPhotos = async () => {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { json } = await request(url, options);

    };
    getPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <FeedContainer className="animeLeft">
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </FeedContainer>
    );
  else return null;
};
