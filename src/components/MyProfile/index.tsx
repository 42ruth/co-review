import React, { useContext } from 'react';
import { userContext } from 'contexts/userContext';

const MyProfile = () => {
  const auth = useContext(userContext);
  return (
    <>
      {auth && (
        <>
          <h3>프로필이미지</h3>
          <img src={auth.userState.user.profileImageUrl} alt="profile image" />
          <h3>email</h3>
          <div>{auth.userState.user.email}</div>
          {/* TODO: 전역에 유저 아이디 추가
          <h3>유저 아이디</h3>
          <div>{auth.userState.user.id}</div> */}
          <h3>유저네임</h3>
          <div>{auth.userState.user.username}</div>
        </>
      )}
    </>
  );
};

export default MyProfile;
