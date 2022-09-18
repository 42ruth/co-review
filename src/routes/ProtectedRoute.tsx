import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useCheckLogin } from 'hooks/useCheckLogin';

interface ProtectedRouteProp {
  isReverse?: boolean;
  redirectPath: string;
}

const ProtectedRoute = ({
  isReverse = false,
  redirectPath,
}: ProtectedRouteProp) => {
  if (useCheckLogin() !== isReverse) {
    return <Outlet />;
  }
  return <Navigate to={redirectPath} replace />;
};

export default ProtectedRoute;
