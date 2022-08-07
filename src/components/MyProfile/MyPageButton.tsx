import React from 'react';
import { Link } from 'react-router-dom';

const MyPageButton = () => {
  return (
    <Link to={'/mypage'} className="button">
      내 페이지
    </Link>
  );
};

export default MyPageButton;
