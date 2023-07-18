import React from 'react';
import { Title } from "../../../styles/global";
import { UserHeaderNav } from './userHeaderNav';
export const UserHeader = () => {
  return (
    <div>
        <header>
            <Title>Minha conta</Title>
            <UserHeaderNav/>

        </header>
    </div>
  )
}

