import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { userContext } from 'contexts/userContext';
import { useFetch, FetchDataType } from 'api/useFetch';
import PrLinkInput from 'components/Form/PrLinkInput';
import FormContentTextarea from 'components/Form/FormContentTextarea';
import FormSubmitButton from 'components/Form/FormSubmitButton';
import { PostRequestType } from 'types/postTypes';
import { API_ORIGIN } from 'constants/index';

const Form = () => {
  const auth = useContext(userContext);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const postId = searchParams.get('id');

  const [postRequest, setPostRequest] = useState<PostRequestType>({
    contents: '',
    prLink: '',
    user: auth?.userState.user.id || null,
  });
  const [isValidPrLink, setIsValidPrLink] = useState(false);

  const getPost: FetchDataType = useFetch({
    endpoint: `${API_ORIGIN}/posts/${postId}`,
    method: 'get',
  });
  const postPost: FetchDataType = useFetch({
    endpoint: `${API_ORIGIN}/posts`,
    method: 'post',
    data: { data: postRequest },
  });
  const putPost: FetchDataType = useFetch({
    endpoint: `${API_ORIGIN}/posts/${postId}`,
    method: 'put',
    data: { data: postRequest },
  });

  useEffect(() => {
    if (postId) getPost.request();
  }, []);

  useEffect(() => {
    if (!postId) {
      setPostRequest({ contents: '', prLink: '', user: null });
    }
  }, [postId]);

  useEffect(() => {
    setPostRequest({
      ...postRequest,
      user: auth?.userState.user.id || null,
    });
  }, [auth?.userState.user.id]);

  useEffect(() => {
    if (postId && !getPost.isLoading && getPost.data) {
      setPostRequest({
        prLink: getPost.data.data.attributes.prLink,
        contents: getPost.data.data.attributes.contents,
        user: auth?.userState.user.id || null,
      });
    }
  }, [getPost.data]);

  useEffect(() => {
    if (postPost.data) {
      navigate(`/posts/${postPost.data.data.id}`, { replace: true });
    }
  }, [postPost.data]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValidPrLink) {
      return alert('유효하지 않은 Pull Request 링크입니다.');
    }

    if (postId) {
      putPost.request();
      navigate(`/posts/${postId}`, { replace: true });
    }
    postPost.request();
  };

  return (
    <>
      {postId && getPost.isLoading && <div>Loading...</div>}
      {postId && !getPost.isLoading && getPost.error && <div>error...</div>}
      {(!postId || (postId && !getPost.isLoading && getPost.data)) && (
        <form onSubmit={handleSubmit}>
          <PrLinkInput
            value={postRequest.prLink}
            setValue={(value) =>
              setPostRequest({ ...postRequest, prLink: value })
            }
            isValid={isValidPrLink}
            setIsValid={(value) => setIsValidPrLink(value)}
          />
          <FormContentTextarea
            value={postRequest.contents}
            setValue={(value) =>
              setPostRequest({ ...postRequest, contents: value })
            }
          />
          <FormSubmitButton />
        </form>
      )}
    </>
  );
};

export default Form;
