import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { userContext } from 'contexts/userContext';

interface ProtectedRouteProp {
  redirectPath: string;
}

const ProtectedRoute = ({ redirectPath }: ProtectedRouteProp) => {
  const auth = useContext(userContext);

  if (auth?.userState.isLogin) {
    return <Outlet />;
  }
  return <Navigate to={redirectPath} replace />;
};

export default ProtectedRoute;
