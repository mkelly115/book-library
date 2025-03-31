import React from "react";
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({component}) => {
    const isAuthenticated = true;

    return isAuthenticated ? component : <Navigate to='/'/>

}

