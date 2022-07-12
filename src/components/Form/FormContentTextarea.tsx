import React, { useState } from 'react';

interface FormContentTextareaProp {
  value: string;
  // eslint-disable-next-line
  setValue: (value: string) => void;
}

const maxContentLength = 300;

const FormContentTextarea = ({ value, setValue }: FormContentTextareaProp) => {
  const [errorMessage, setErrorMessage] = useState('');
  const handleChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const { value } = event.currentTarget;
    setValue(value);
    if (!errorMessage && value.length >= maxContentLength)
      setErrorMessage(`최대 ${maxContentLength}자까지만 입력 가능합니다.`);
    else if (errorMessage && value.length < maxContentLength)
      setErrorMessage('');
  };
  return (
    <>
      <textarea
        value={value}
        onChange={handleChange}
        maxLength={maxContentLength}
        required
      />
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};

export default FormContentTextarea;
