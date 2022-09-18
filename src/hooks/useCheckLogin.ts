import { useContext } from 'react';
import { userContext } from 'contexts/userContext';

export const useCheckLogin = () => {
  const auth = useContext(userContext);
  return auth?.userState.isLogin;
};
