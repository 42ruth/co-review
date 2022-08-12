import React, { useContext, useEffect } from 'react';
import { userContext } from 'contexts/userContext';
import { API_ORIGIN } from 'constants/index';

const storage = window.localStorage;
// 필요시 window.sessionStorage 등으로 변경 가능

const LogInOutButton = () => {
  const auth = useContext(userContext);

  useEffect(() => {
    const storageString = storage.getItem('userState');

    if (auth?.userState.isLogin) {
      const contextString = JSON.stringify(auth?.userState);
      if (storageString !== contextString) {
        storage.setItem('userState', contextString);
      }
      return;
    }
    if (storageString) {
      const storageState = JSON.parse(storageString);
      auth?.login(storageState.user, storageState.token);
    }
  }, [auth?.userState]);

  const onLogout = () => {
    auth?.logout();
    storage.removeItem('userState');
  };

  if (auth?.userState.isLogin) {
    return (
      <button type="button" onClick={onLogout} className="logout-button">
        <img src={auth.userState.user.profileImageUrl} alt="profile image" />
        <p>로그아웃</p>
      </button>
    );
  }
  return (
    <a href={`${API_ORIGIN}/connect/github`} className="logout-button">
      로그인
    </a>
  );
};

export default LogInOutButton;
