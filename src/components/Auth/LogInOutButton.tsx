import React, { useContext } from 'react';
import { userContext } from 'contexts/userContext';

const LogInOutButton = () => {
  const auth = useContext(userContext);

  const onLogin = () => {
    // TODO: oauth로 변경
    // GET STRAPI_BACKEND_URL/api/connect/${provider}

    auth?.login({
      id: 0,
      userName: 'tempName',
      email: 'temp@temp.com',
      profileImage: 'https://avatars.githubusercontent.com/u/42',
    });
  };

  const onLogout = () => {
    auth?.logout();
  };

  if (auth?.userState.isLogin) {
    return (
      <button type="button" onClick={onLogout} className="logout-button">
        <img src={auth.userState.user.profileImage} alt="profile image" />
        <p>로그아웃</p>
      </button>
    );
  }
  return (
    <button type="button" onClick={onLogin} className="logout-button">
      로그인
    </button>
  );
};

export default LogInOutButton;
