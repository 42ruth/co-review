import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { userContext } from 'contexts/userContext';
import toast from 'react-hot-toast';

const ProtectedRoute = ({ redirectPath }: { redirectPath: string }) => {
  const auth = useContext(userContext);
  if (auth?.userState.isLogin) {
    return <Outlet />;
  }
  toast.error("로그인 후 이용해주세요")
  return <Navigate to={redirectPath} />;
};

export default ProtectedRoute;
