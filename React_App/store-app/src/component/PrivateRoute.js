import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, isAdminRequired = false }) => {
  const token = localStorage.getItem('token');
  const isAdmin = localStorage.getItem('isAdmin'); 

  if (isAdminRequired && isAdmin == 'false') {
    return <Navigate to="/not-authorized" />;
  }

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
