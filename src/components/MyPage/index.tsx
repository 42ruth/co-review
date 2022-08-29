import React, { useContext, useEffect, useState } from 'react';
import { userContext } from 'contexts/userContext';
import PostList from 'components/PostList';
import { API_ORIGIN } from 'constants/';
import 'assets/css/MyPage.css';

const MyPage = () => {
  const auth = useContext(userContext);
  const [endpoint, setEndpoint] = useState('');

  useEffect(() => {
    if (auth?.userState.isLogin) {
      setEndpoint(
        `${API_ORIGIN}/users/${auth?.userState.user.id}?populate[posts][sort]=createdAt:desc`
      );
    }
  }, [auth]);

  return (
    <section className="MyPage">
      {auth && (
        <>
          <h3>프로필이미지</h3>
          <img
            className="img"
            src={auth.userState.user.profileImageUrl}
            alt="profile image"
          />
          <h3>email</h3>
          <div>{auth.userState.user.email}</div>
          <h3>유저네임</h3>
          <div>{auth.userState.user.username}</div>
        </>
      )}
      {endpoint && <PostList endpointProp={endpoint} />}
    </section>
  );
};

export default MyPage;
