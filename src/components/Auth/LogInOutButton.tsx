import React, { useContext } from 'react';
import { userContext } from 'contexts/userContext';
import { API_ORIGIN } from 'constants/index';

const LogInOutButton = () => {
  const auth = useContext(userContext);

  const onLogout = () => {
    auth?.logout();
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
