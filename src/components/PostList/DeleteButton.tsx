import React, { useEffect } from 'react';
import { FetchDataType, useFetch } from 'api/useFetch';
import { API_ORIGIN } from 'constants/';

interface deleteButtonProp {
  id: number;
  refresh: () => void;
}

const DeleteButton = ({ id, refresh }: deleteButtonProp) => {
  const { isLoading, error, data, request }: FetchDataType = useFetch({
    endpoint: `${API_ORIGIN}/posts/${id}`,
    method: 'delete',
  });

  useEffect(() => {
    data && refresh();
  }, [data]);

  const handleDelete = () => {
    const answer = confirm('정말 삭제하시겠습니까?');
    answer && request();
  };

  return <button onClick={handleDelete}>삭제</button>;
};

export default DeleteButton;
