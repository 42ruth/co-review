import React from 'react';
import { Link } from 'react-router-dom';
import 'assets/css/Header.css';
import MyPageButton from 'components/MyProfile/MyPageButton';
import LogInOutButton from './Auth/LogInOutButton';

const Header = () => {
  return (
    <header>
      <Link to="/">LOGO</Link>
      <Link to="/form" className="button">
        리뷰 신청하기
      </Link>
      <MyPageButton />
      <LogInOutButton />
    </header>
  );
};

export default Header;
