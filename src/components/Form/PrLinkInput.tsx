import React, { useState } from "react";

interface PrLinkInputType {
  value: string;
  setValue: (value: string) => void;
}

const PrLinkInput = ({value, setValue} : PrLinkInputType) => {
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const regex = /^(https?:\/\/)(github\.com\/)([0-9a-zA-z-_]+)(\/)([0-9a-zA-z-_]+)(\/pull\/)([0-9]+$)/i;

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    setValue(value);
    setIsValid(regex.test(value))
  }

  const handleBlur = () => {
    setIsTouched(true);
  }

  return(
    <div>
      <div>
        Pull Request 링크
      </div>
      <input
        placeholder="https://github.com/user/repo/pull/123"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <div>
        {isTouched && !isValid && '유효하지 않은 URL입니다.'}
      </div>
    </div>
  )
}

export default PrLinkInput;
