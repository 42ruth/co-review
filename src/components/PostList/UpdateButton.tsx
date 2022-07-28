import React from 'react';
import { Link } from 'react-router-dom';

interface UpdateButtonProp {
  id: number;
}

const UpdateButton = ({ id }: UpdateButtonProp) => {
  return <Link to={`/editor?id=${id}`}>수정</Link>;
};

export default UpdateButton;
