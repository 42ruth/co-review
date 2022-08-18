import React, { useContext, useEffect, useRef, useState } from 'react';
import { userContext } from 'contexts/userContext';
import { PostItemType } from 'types/postTypes';
import { formatDate } from 'utils/dateUtil';
import DeleteButton from 'components/PostList/DeleteButton';
import PrLinkButton from 'components/PostList/PrLinkButton';
import 'assets/css/PostItem.css';
import UpdateButton from './UpdateButton';

interface PostItemProp extends PostItemType {
  userId: number;
  username: string;
  profileImage: string;
  refresh: () => void;
}

const PostItem = ({
  id,
  prLink,
  contents,
  createdAt,
  userId,
  username,
  profileImage,
  refresh,
}: PostItemProp) => {
  const auth = useContext(userContext);
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
        {auth?.userState.user.id === userId && <UpdateButton id={id} />}
        {auth?.userState.user.id === userId && (
          <DeleteButton id={id} refresh={refresh} />
        )}
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
