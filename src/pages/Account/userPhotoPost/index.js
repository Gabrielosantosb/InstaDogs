import React from "react";
import { View } from "react-native";
import { UserHeader } from "../userHeader";
import { Title } from "../../../styles/global";
import { Input } from "../../../components/form/input";
import { Button } from "../../../components/Login/styles";
import { useForm } from "../../../Hooks/useForm";
import { useState } from "react";
import { useFetch } from "../../../Hooks/useFetch";
import { PHOTO_POST } from "../../../contants/endpoints";
import { PhotoPostContainer, Preview } from "./styles";



// ##TODO TERMINAR ESTA PAGINA

export const UserPhotoPost = () => {
  const [name, setName] = useState("");
  const [peso, setPeso] = useState("");
  const [idade, setIdade] = useState("");
  const [img, setImg] = useState({ preview: "", raw: null });
  const { url, error, loading, request } = useFetch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", name);
    formData.append("peso", peso);
    formData.append("idade", idade);
    const token = window.localStorage.getItem("token");
    console.log("Token " + token);
    const { url, options } = PHOTO_POST(formData, token);
    console.log([...formData.entries()]);
    await request(url, options);
  };

  const handleImgChange = (event) => {
    const file = event.target.files[0];
    setImg({
      preview: URL.createObjectURL(file),
      raw: file,
    });
  };

  return (
    <>
      <Title>Postar foto</Title>
      <PhotoPostContainer className="animeLeft">
        <form onSubmit={handleSubmit}>
          <Input
            label="Nome"
            type="text"
            name="nome"
            onChange={({ target }) => setName(target.value)}
          />
          <Input
            label="Peso"
            type="number"
            name="peso"
            onChange={({ target }) => setPeso(target.value)}
          />
          <Input
            label="Idade"
            type="number"
            name="idade"
            onChange={({ target }) => setIdade(target.value)}
          />

          <input type="file" name="img" id="img" onChange={handleImgChange} />
          {img.preview && (
            <Preview>
              <img
                src={img.preview}
                alt="Preview"
                style={{ maxWidth: "500px", maxHeight: "500px" }}
              />
          <Button>Enviar</Button>
            </Preview>
          )}
        </form>
      </PhotoPostContainer>
    </>
  );
};
