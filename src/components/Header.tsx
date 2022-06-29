import React from 'react'
import { Link } from 'react-router-dom'
import "assets/css/Header.css"

const Header = () => {
  return (
    <header>
        <Link to="/">LOGO</Link>
        <Link to="/form">
          <div className='button'>리뷰 신청하기</div>
        </Link>
    </header>
  )
}

export default Header