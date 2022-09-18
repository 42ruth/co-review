import React from 'react';
import { Link } from 'react-router-dom';
import 'assets/css/Header.css';
import MyPageButton from 'components/MyPage/MyPageButton';

const Header = () => {
  return (
    <header>
      <Link to="/">LOGO</Link>
      <Link to="/editor" className="button">
        리뷰 신청하기
      </Link>
      <Link to="/login">로그인페이지</Link>
      <MyPageButton />
    </header>
  );
};

export default Header;
