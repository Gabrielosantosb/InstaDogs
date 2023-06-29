import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

export const Input = ({label, type, name}) => {
  return(
    <div>
        <label htmlFor={name}>
        {label}
        </label>
        <input id={name} name={name} type={type}/>

        <p>Error</p>


    </div>

  )
}
