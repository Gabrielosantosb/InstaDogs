import React, { useState } from "react";
import { View } from "react-native";

// import { Container } from './styles';

export const useForm = (type) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState('')
  const validate = (value) =>{
    if (type === false) return true
    if (value.length === 0){
      setError('Preencha um valor')
    }


  }

  const onChange = ({ target }) => {
    setValue(target.value);
  };

  return { value, setValue, onChange };
};
