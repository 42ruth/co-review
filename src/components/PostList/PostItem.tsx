import React, { useEffect, useRef, useState } from 'react';
import { PostItemType } from 'types/postTypes';
import { formatDate } from 'utils/dateUtil';
import DeleteButton from 'components/PostList/DeleteButton';
import PrLinkButton from 'components/PostList/PrLinkButton';
import 'assets/css/PostItem.css';

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
  const [formattedDate, setFormattedDate] = useState(formatDate(createdAt));
  const interval: { current: ReturnType<typeof setTimeout> | null } =
    useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      setFormattedDate(formatDate(createdAt));
    }, 1000 * 60);
    return () =>
      clearInterval(interval.current as ReturnType<typeof setTimeout>);
  }, []);

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
