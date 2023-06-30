import React, { useState } from "react";
import { View } from "react-native";

// import { Container } from './styles';

export const useForm = () => {
  const [value, setValue] = useState("");
    
  const onChange = (target) => {
    setValue(target.value);
  };

  return value, setValue;
};
