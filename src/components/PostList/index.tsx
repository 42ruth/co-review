import React, { useEffect } from 'react';
import { useFetch, FetchDataType } from 'api/useFetch';
import PostItem from 'components/PostList/PostItem';
import { API_ORIGIN } from 'constants/';

interface responseDataType {
  id: number;
  attributes: { prLink: string; contents: string; createdAt: string };
}

const PostList = () => {
  const { isLoading, error, data, request }: FetchDataType = useFetch({
    endpoint: `${API_ORIGIN}/posts`,
    method: 'get',
  });

  useEffect(() => {
    request();
  }, []);

  return (
    <section>
      {isLoading && <div>Loading...</div>}
      {!isLoading && error && <div>error...</div>}
      {!isLoading &&
        data &&
        data.map((post: responseDataType, index: number) => {
          return (
            <PostItem
              key={index}
              id={post.id}
              prLink={post.attributes.prLink}
              contents={post.attributes.contents}
              createdAt={post.attributes.createdAt}
            />
          );
        })}
    </section>
  );
};

export default PostList;
