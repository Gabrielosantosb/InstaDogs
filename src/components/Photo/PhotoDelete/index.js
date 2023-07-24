import React from "react";
import { View } from "react-native";
import { PHOTO_DELETE } from "../../../contants/endpoints";
import { useFetch } from "../../../Hooks/useFetch";
import { DeleteButton } from "./styles";

// import { Container } from './styles';

export const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  const handleClick = async () => {
    const { url, options } = PHOTO_DELETE(id);
    try {
      const confirmDelete = window.confirm("Certeza que deseja deletar?");
      if (confirmDelete) {
        await request(url, options);
        window.location.reload();
      }
    } catch (err) {
      console.log("Error deleting photo:", err);
    }
  };

  return (
    <>
      <DeleteButton onClick={handleClick} disabled={loading}>
        {loading ? "Deletando..." : "Deletar"}
      </DeleteButton>
    </>
  );
};

export default PhotoDelete;
