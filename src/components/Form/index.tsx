import React, { useState } from 'react';
import { useFetch, FetchDataType } from 'api/useFetch';
import PrLinkInput from 'components/Form/PrLinkInput';
import FormContentTextarea from 'components/Form/FormContentTextarea';
import FormSubmitButton from 'components/Form/FormSubmitButton';
import { PostRequestType } from 'types/postTypes';
import { API_ORIGIN } from 'constants/index';

const Form = () => {
  const [postRequest, setPostRequest] = useState<PostRequestType>({
    contents: '',
    prLink: '',
  });
  const [isValidPrLink, setIsValidPrLink] = useState(false);
  const { isLoading, error, data, request }: FetchDataType = useFetch({
    endpoint: `${API_ORIGIN}/posts`,
    method: 'post',
    data: { data: postRequest },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValidPrLink) {
      return alert('유효하지 않은 Pull Request 링크입니다.');
    }
    request();
    if (!isLoading && !error) {
      // TODO: redirect page
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PrLinkInput
        value={postRequest.prLink}
        setValue={(value) => setPostRequest({ ...postRequest, prLink: value })}
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
  );
};

export default Form;
