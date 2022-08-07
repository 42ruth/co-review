import React, { useState } from 'react';
import { userContext } from './userContext';
import { UserType } from 'types/userTypes';

interface UserContextProviderProp {
  children: React.ReactNode;
}

const UserContextProvider = ({ children }: UserContextProviderProp) => {
  const [userState, setUserState] = useState({
    isLogin: false,
    user: {},
  });

  // TODO: github oauth
  const login = (user: UserType) => {
    setUserState({
      isLogin: true,
      user: user,
    });
  };

  const logout = () => {
    setUserState({
      isLogin: false,
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
