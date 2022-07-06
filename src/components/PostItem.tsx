import React from 'react';
import 'assets/css/PostItem.css';

export const PostItem = () => {
  return (
    <div className="PostItem">
      <div className="top">
        <div className="username">깃헙이름(githubId)</div>
        <div className="date">날짜</div>
      </div>
      <div className="bottom">
        <div className="content">처음 만들어 본 리액트 앱 리뷰 신청합니다.</div>
        <div className="button-wrap">
          <button className="button">리뷰하러 가기</button>
        </div>
      </div>
    </div>
  );
};
