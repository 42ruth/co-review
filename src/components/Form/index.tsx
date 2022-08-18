import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { useFetch, FetchDataType } from 'api/useFetch';
import PrLinkInput from 'components/Form/PrLinkInput';
import FormContentTextarea from 'components/Form/FormContentTextarea';
import FormSubmitButton from 'components/Form/FormSubmitButton';
import { PostRequestType } from 'types/postTypes';
import { API_ORIGIN } from 'constants/index';

const Form = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [postRequest, setPostRequest] = useState<PostRequestType>({
    contents: '',
    prLink: '',
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
  const { request: requestPost }: FetchDataType = useFetch({
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
      });
    }
  }, dataGet);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValidPrLink) {
      return alert('유효하지 않은 Pull Request 링크입니다.');
    }
    // TODO: user 정보까지 post
    if (id) requestPut();
    else requestPost();
    navigate(`/posts/${id}`, { replace: true });
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
