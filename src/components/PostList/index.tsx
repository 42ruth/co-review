import React from 'react';
import PostItem from 'components/PostList/PostItem';

const PostList = () => {
  const datas = [
    {
      id: 1,
      prLink: 'https://github.com/42ruth/co-review/issues/10',
      createdAt: '2022-06-30T05:20:47.363Z',
      contents: 'Hello! This is a post to test.',
    },
    {
      id: 4,
      prLink: 'https://github.com/s2lululala/react-signup-form/pull/10',
      createdAt: '2022-06-30T05:55:38.544Z',
      contents: '회원가입 폼 코드리뷰 요청합니다. 수정 테스트.',
    },
    {
      id: 7,
      prLink: 'https://github.com/humonnom/react-practice-form/pull/25',
      createdAt: '2022-07-06T11:40:10.304Z',
      contents: '리뷰해주세요.',
    },
    {
      id: 8,
      prLink: 'https://github.com/humonnom/react-practice-form/pull/25',
      createdAt: '2022-07-06T11:40:39.364Z',
      contents: '리뷰해주세요.',
    },
    {
      id: 9,
      prLink: 'https://github.com/s2lululala/react-signup-form/pull/10',
      createdAt: '2022-07-06T11:41:06.096Z',
      contents: '회원가입 폼 코드리뷰 요청합니다.',
    },
    {
      id: 11,
      prLink: 'https://github.com/humonnom/react-practice-form/pull/25',
      createdAt: '2022-07-06T11:41:27.969Z',
      contents: '리뷰해주세요.',
    },
  ];
  return (
    <section>
      {datas.map((data, index) => {
        return (
          <PostItem
            key={index}
            id={data.id}
            prLink={data.prLink}
            contents={data.contents}
            createdAt={data.createdAt}
          />
        );
      })}
    </section>
  );
};

export default PostList;
