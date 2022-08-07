import React from 'react';
import { Link } from 'react-router-dom';
import 'assets/css/Header.css';
import LogInOutButton from './Auth/LogInOutButton';

const Header = () => {
  return (
    <header>
      <Link to="/">LOGO</Link>
      <Link to="/form" className="button">
        리뷰 신청하기
      </Link>
      <LogInOutButton />
    </header>
  );
};

export default Header;
