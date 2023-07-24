import React from "react";
import { useState } from "react";
import { ReactComponent as Send } from "../../../assets/enviar.svg";
import { useFetch } from "../../../Hooks/useFetch";
import { COMMENT_POST } from "../../../contants/endpoints";
import {Error} from "../../../common/error"
import { FormContainer } from "./styles";

export const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = useState("");
  const { request, error } = useFetch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });

    try {
      const { response, json } = await request(url, options);
      if (response.ok) {
        setComment("");
        setComments((prevComments) => [...prevComments, json]);
        console.log("Comment posted successfully!", response);
      }
    } catch (err) {
      console.error("Error posting comment:", err);
    }
  };

  return (
    
    <FormContainer onSubmit={handleSubmit}>
      {error && <p>Error: {error}</p>}
      <textarea
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button type="submit">
        <Send />
      </button>
      <Error error={error}/>
    </FormContainer>
  );
};
