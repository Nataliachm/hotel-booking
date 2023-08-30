/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-extraneous-dependencies */
import { Navigate } from 'react-router-dom';
import { useJwt } from 'react-jwt';

import React from 'react';

const PrivateRoute = ({ role = 'user', redirectRoute = '/', children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to={redirectRoute} />;
  }

  if (role === 'user') {
    const { isExpired } = useJwt(token);
    const isAthorization = !isExpired;
    return isAthorization ? children : <Navigate to={redirectRoute} />;
  }

  if (role === 'admin') {
    const { decodedToken, isExpired } = useJwt(token);
    const { role_name: roleName } = decodedToken;
    const isAthorization = !isExpired;

    return isAthorization ? (role === roleName ? children : <Navigate to={redirectRoute} />)
      : <Navigate to={redirectRoute} />;
  }

  return children;
};

export default PrivateRoute;
