import React, { useEffect, useRef, useState } from 'react';
import { useFetch, FetchDataType } from 'api/useFetch';
import { PostItemType } from 'types/postTypes';
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

interface PostListProp {
  endpointProp?: string;
}

const PostList = ({ endpointProp }: PostListProp) => {
  const [endpoint, setEndpoint] = useState('');
  const [isRefresh, setIsRefresh] = useState(false);
  const { isLoading, error, data, request }: FetchDataType = useFetch({
    endpoint: endpoint,
    method: 'get',
  });
  const isMainPage = useRef(true);

  useEffect(() => {
    if (!endpointProp) {
      setEndpoint(`${API_ORIGIN}/posts?populate=user&sort=createdAt:desc`);
      isMainPage.current = true;
    } else {
      setEndpoint(endpointProp);
      isMainPage.current = false;
    }
  }, [endpoint]);

  useEffect(() => {
    if (endpoint) {
      request();
    }
  }, [endpoint]);

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
        isMainPage.current &&
        data?.data?.map((post: responseDataType, index: number) => {
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
      {!isLoading && !isMainPage.current && data?.posts && (
        <h3>작성한 포스트: {data.posts.length}개</h3>
      )}
      {!isLoading &&
        !isMainPage.current &&
        data?.posts?.map((post: PostItemType, index: number) => {
          return (
            <PostItem
              key={index}
              id={post.id}
              prLink={post.prLink}
              contents={post.contents}
              createdAt={post.createdAt}
              username={data.username}
              profileImage={data.profileImageUrl}
              refresh={toggleIsRefresh}
            />
          );
        })}
    </section>
  );
};

export default PostList;
