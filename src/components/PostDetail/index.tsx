import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { FetchDataType, useFetch } from 'api/useFetch';
import PostItem from 'components/PostList/PostItem';
import { API_ORIGIN } from 'constants/';

const PostDetail = () => {
  const { id } = useParams();
  const { isLoading, error, data, request }: FetchDataType = useFetch({
    endpoint: `${API_ORIGIN}/posts/${id}?populate=user`,
    method: 'get',
  });
  const navigate = useNavigate();

  useEffect(() => {
    request();
  }, []);

  const handleRefresh = () => {
    navigate('/');
  };

  return (
    <section>
      {isLoading && <div>Loading...</div>}
      {!isLoading && error && <div>error...</div>}
      {!isLoading && data && (
        <PostItem
          id={data.id}
          prLink={data.attributes.prLink}
          contents={data.attributes.contents}
          createdAt={data.attributes.createdAt}
          username={data.attributes.user.data.attributes.username}
          profileImage={data.attributes.user.data.attributes.profileImageUrl}
          refresh={handleRefresh}
        />
      )}
    </section>
  );
};

export default PostDetail;
