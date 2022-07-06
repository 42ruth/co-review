import React from 'react';

interface PrLinkButtonProps {
  prLink: string;
}

const PrLinkButton = ({ prLink }: PrLinkButtonProps) => {
  return (
    <a
      href={prLink}
      target="_blank"
      rel="noopener noreferrer"
      className="button"
    >
      리뷰하러가기
    </a>
  );
};

export default PrLinkButton;
