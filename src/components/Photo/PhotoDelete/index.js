import React from "react";
import { View } from "react-native";
import { PHOTO_DELETE } from "../../../contants/endpoints";
import { useFetch } from "../../../Hooks/useFetch";

// import { Container } from './styles';

export const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();
  const handleClick = async (event) => {
    event.preventDefault();
    const { url, options } = PHOTO_DELETE(id);
    try {
      const response = await request(url, options);
      console.log(response)
    //   if (response) {
    //     window.location.reload(); 
    //   } else {
    //     console.log('Foi não')
    //   }
    } catch (err) {
      console.log("Error deleting photo:", err);
      // Handle the error, e.g., show error messages or redirect to a login page if unauthorized
    }
  };

  return (
    <div>
      <button onClick={handleClick} disabled={loading}>
        {loading ? "Deleting..." : "Deletar"}
      </button>
    </div>
  );
};

export default PhotoDelete;
