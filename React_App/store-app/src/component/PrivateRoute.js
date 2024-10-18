import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element }) => {
  const token = localStorage.getItem('token');

  return (
    <Route
      render={() => {
        return token ? Element : <Navigate to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
