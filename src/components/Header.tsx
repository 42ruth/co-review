import React from 'react';
import { Link } from 'react-router-dom';
import 'assets/css/Header.css';
import MyPageButton from 'components/MyPage/MyPageButton';
import { useCheckLogin } from 'hooks/useCheckLogin';
import LogInOutButton from 'components/Auth/LogInOutButton';

const Header = () => {
  const isLogged = useCheckLogin();
  return (
    <header>
      <Link to="/">LOGO</Link>
      <Link to={isLogged ? '/editor' : 'login'} className="button">
        리뷰 신청하기
      </Link>
      {isLogged ? (
        <>
          <LogInOutButton />
          <MyPageButton />
        </>
      ) : (
        <Link to="/login">로그인페이지</Link>
      )}
    </header>
  );
};

export default Header;
