import React, { useContext } from 'react';
import { UserContext } from '../../Hooks/userContext';


// import { Container } from './styles';

export const Account = () => {
  const {login} = useContext(UserContext)

  return(
    <div className='animeLeft'>
      <p>Minha Conta</p>
      </div>
  )
}

