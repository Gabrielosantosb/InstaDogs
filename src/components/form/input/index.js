import React from "react";
import { Error, InputStyle } from "./styles";

export const Input = ({ label, type, name, value, onChange,errors, onBlur }) => {
 
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <InputStyle id={name} name={name} type={type} onChange={onChange} value={value} onBlur={onBlur}/>
    
      {errors && <Error>Error</Error>}
    </div>
  );
};
