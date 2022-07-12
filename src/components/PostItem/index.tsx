import React from 'react';
import { PostItemType } from 'types/postTypes';
import 'assets/css/PostItem.css';
import PrLinkButton from './PrLinkButton';

function formatDate(rawDate: string) {
  const rawDateObject = new Date(rawDate);
  const todayDateObject = new Date();
  const diffHour = Math.floor(
    (todayDateObject.getTime() - rawDateObject.getTime()) / (1000 * 60 * 60)
  );
  const diffDate = Math.floor(diffHour / 24);
  let dateString;
  if (diffHour < 24) {
    dateString = diffHour === 0 ? '방금 전' : `${diffHour}시간 전`;
  } else if (diffDate <= 6) {
    dateString = `${diffDate}일 전`;
  } else {
    const year = rawDateObject.getFullYear();
    const month = rawDateObject.getMonth() + 1;
    const date = rawDateObject.getDate();
    const hour = rawDateObject.getHours();
    const minute = rawDateObject.getMinutes();
    const ampm = hour < 12 ? '오전' : '오후';
    dateString = `${year}.${month}.${date} ${ampm} ${
      hour > 12 ? hour % 12 : hour
    }:${minute}`;
  }
  return dateString;
}

const PostItem = ({ id, pr_link, contents, created_at }: PostItemType) => {
  const formattedDate = formatDate(created_at);

  return (
    <div className="PostItem">
      <div className="top">
        <div className="username">깃헙이름(githubId)</div>
        <div className="date">{formattedDate}</div>
      </div>
      <div className="bottom">
        <div className="content">{contents}</div>
        <div className="button-wrap">
          <PrLinkButton prLink={pr_link} />
        </div>
      </div>
    </div>
  );
};

export default PostItem;
