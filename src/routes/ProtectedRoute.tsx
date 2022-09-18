import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useCheckLogin } from 'hooks/useCheckLogin';

interface ProtectedRouteProp {
  redirectPath: string;
}

const ProtectedRoute = ({ redirectPath }: ProtectedRouteProp) => {
  if (useCheckLogin()) {
    return <Outlet />;
  }
  return <Navigate to={redirectPath} replace />;
};

export default ProtectedRoute;
