import React from 'react';
import { useCheckLogin } from 'hooks/useCheckLogin';

interface PrLinkButtonProp {
  prLink: string;
}

const PrLinkButton = ({ prLink }: PrLinkButtonProp) => {
  return (
    <a
      href={useCheckLogin() ? prLink : '/login'}
      target="_blank"
      rel="noopener noreferrer"
      className="button"
    >
      리뷰하러 가기
    </a>
  );
};

export default PrLinkButton;
