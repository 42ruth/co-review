import React, { useEffect, useState } from 'react';
const prLinkRegex =
  /^(https?:\/\/)(github\.com\/)([0-9a-zA-z-_]+)(\/)([0-9a-zA-z-_]+)(\/pull\/)([0-9]+$)/i;

interface PrLinkInputProp {
  value: string;
  setValue: (value: string) => void;
  isValid: boolean;
  setIsValid: (value: boolean) => void;
}

const PrLinkInput = ({
  value,
  setValue,
  isValid,
  setIsValid,
}: PrLinkInputProp) => {
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    setIsValid(prLinkRegex.test(value));
  }, []);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setValue(value);
    setIsValid(prLinkRegex.test(value));
  };

  const handleBlur = () => {
    setIsTouched(true);
  };

  return (
    <div>
      <div>Pull Request 링크</div>
      <input
        placeholder="https://github.com/user/repo/pull/123"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      <div>{isTouched && !isValid && '유효하지 않은 URL입니다.'}</div>
    </div>
  );
};

export default PrLinkInput;
