import React from 'react';

interface PrLinkButtonProp {
  prLink: string;
}

const PrLinkButton = ({ prLink }: PrLinkButtonProp) => {
  return (
    <a
      href={prLink}
      target="_blank"
      rel="noopener noreferrer"
      className="button"
    >
      리뷰하러 가기
    </a>
  );
};

export default PrLinkButton;
