import React from 'react';
import { PostItemType } from 'types/postTypes';
import DeleteButton from 'components/PostList/DeleteButton';
import PrLinkButton from 'components/PostList/PrLinkButton';
import 'assets/css/PostItem.css';

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

interface PostItemProp extends PostItemType {
  username: string;
  profileImage: string;
  refresh: () => void;
}

const PostItem = ({
  id,
  prLink,
  contents,
  createdAt,
  username,
  profileImage,
  refresh,
}: PostItemProp) => {
  const formattedDate = formatDate(createdAt);

  return (
    <div className="PostItem">
      <div className="top">
        <img className="img" src={profileImage} />
        <div className="username">{username}</div>
        <div className="date">{formattedDate}</div>
        {/* 로그인한 유저의 글에만 노출되도록 수정 */}
        <DeleteButton id={id} refresh={refresh} />
      </div>
      <div className="bottom">
        <div className="content">{contents}</div>
        <div className="button-wrap">
          <PrLinkButton prLink={prLink} />
        </div>
      </div>
    </div>
  );
};

export default PostItem;
