import React from "react";
import { FeedPhotosItem } from "../FeedItem";
import { useFetch } from "../../../../Hooks/useFetch";
import { useEffect } from "react";
import { PHOTOS_GET } from "../../../../contants/endpoints";
import { Error } from "../../../../common/error";
import { Loading } from "../../../../common/loading";
import { FeedContainer } from "../styles";

export const FeedPhotos = ({  page, user, setModalPhoto, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function getPhotos() {
      const total = 3;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) setInfinite(false);
    }
    getPhotos();
  }, [request, user, page, setInfinite]);

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
