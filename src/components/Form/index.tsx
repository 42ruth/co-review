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
  const [postRequest, setPostRequest] = useState<PostRequestType>({
    contents: '',
    prLink: '',
    user: auth?.userState.user.id || null,
  });
  const [isValidPrLink, setIsValidPrLink] = useState(false);

  const id = searchParams.get('id');

  const {
    isLoading: isLoadingGet,
    error: errorGet,
    data: dataGet,
    request: requestGet,
  }: FetchDataType = useFetch({
    endpoint: `${API_ORIGIN}/posts/${id}`,
    method: 'get',
  });
  const { data: dataPost, request: requestPost }: FetchDataType = useFetch({
    endpoint: `${API_ORIGIN}/posts`,
    method: 'post',
    data: { data: postRequest },
  });
  const { request: requestPut }: FetchDataType = useFetch({
    endpoint: `${API_ORIGIN}/posts/${id}`,
    method: 'put',
    data: { data: postRequest },
  });

  useEffect(() => {
    if (id) requestGet();
  }, []);

  useEffect(() => {
    if (id && !isLoadingGet && dataGet) {
      setPostRequest({
        prLink: dataGet.data.attributes.prLink,
        contents: dataGet.data.attributes.contents,
        user: auth?.userState.user.id || null,
      });
    }
  }, [dataGet]);

  useEffect(() => {
    if (dataPost) {
      navigate(`/posts/${dataPost.data.id}`, { replace: true });
    }
  }, [dataPost]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValidPrLink) {
      return alert('유효하지 않은 Pull Request 링크입니다.');
    }

    if (id) {
      requestPut();
      navigate(`/posts/${id}`, { replace: true });
    }
    requestPost();
  };

  return (
    <>
      {id && isLoadingGet && <div>Loading...</div>}
      {id && !isLoadingGet && errorGet && <div>error...</div>}
      {(!id || (id && !isLoadingGet && dataGet)) && (
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
