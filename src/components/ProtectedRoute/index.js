import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../Hooks/userContext';
import { Navigate } from 'react-router-dom';
import { Account } from '../../pages/Account';


// import { Container } from './styles';

export const ProtectedRoute = () => {
    const {login} = useContext(UserContext)

    return login ? <Navigate to= '/login'/> : <Account/>
}

