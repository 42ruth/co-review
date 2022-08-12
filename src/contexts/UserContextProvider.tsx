import React, { useState } from 'react';
import { userContext } from './userContext';
import { UserType } from 'types/userTypes';

interface UserContextProviderProp {
  children: React.ReactNode;
}

const UserContextProvider = ({ children }: UserContextProviderProp) => {
  const [userState, setUserState] = useState({
    isLogin: false,
    token: '',
    user: {},
  });

  const login = (user: UserType, token: string) => {
    setUserState({
      isLogin: true,
      token: token,
      user: user,
    });
  };

  const logout = () => {
    setUserState({
      isLogin: false,
      token: '',
      user: {},
    });
  };

  return (
    <userContext.Provider value={{ userState, login, logout }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
