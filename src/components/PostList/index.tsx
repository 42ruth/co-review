import React, { useEffect, useState } from 'react';
import { useFetch, FetchDataType } from 'api/useFetch';
import PostItem from 'components/PostList/PostItem';
import { API_ORIGIN } from 'constants/';

interface responseDataType {
  id: number;
  attributes: {
    prLink: string;
    contents: string;
    createdAt: string;
    user: {
      data: {
        attributes: { username: string; profileImageUrl: string };
      };
    };
  };
}

const PostList = () => {
  const [isRefresh, setIsRefresh] = useState(false);
  const {
    isLoading,
    error,
    data: posts,
    request,
  }: FetchDataType = useFetch({
    endpoint: `${API_ORIGIN}/posts?populate=user`,
    method: 'get',
  });

  useEffect(() => {
    request();
  }, []);

  const toggleIsRefresh = () => {
    setIsRefresh((isRefresh) => !isRefresh);
  };

  useEffect(() => {
    if (isRefresh) {
      toggleIsRefresh();
      request();
    }
  }, [isRefresh]);

  return (
    <section>
      {isLoading && <div>Loading...</div>}
      {!isLoading && error && <div>error...</div>}
      {!isLoading &&
        posts &&
        posts.map((post: responseDataType, index: number) => {
          console.log(post.attributes.user.data.attributes);
          return (
            <PostItem
              key={index}
              id={post.id}
              prLink={post.attributes.prLink}
              contents={post.attributes.contents}
              createdAt={post.attributes.createdAt}
              username={post.attributes.user.data.attributes.username}
              profileImage={
                post.attributes.user.data.attributes.profileImageUrl
              }
              refresh={toggleIsRefresh}
            />
          );
        })}
    </section>
  );
};

export default PostList;
