import React, { useEffect, useState } from 'react';
import { FetchDataType, useFetch } from 'api/useFetch';
import { API_ORIGIN } from 'constants/';
import Modal from 'components/Modal';

interface deleteButtonProp {
  id: number;
  refresh: () => void;
}

const DeleteButton = ({ id, refresh }: deleteButtonProp) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLoading, error, data, request }: FetchDataType = useFetch({
    endpoint: `${API_ORIGIN}/posts/${id}`,
    method: 'delete',
  });

  useEffect(() => {
    data && refresh();
  }, [data]);

  const onClick = () => {
    setIsModalOpen(true);
  };

  const handleDelete = () => {
    request();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={onClick}>삭제</button>
      {isModalOpen && (
        <Modal onConfirm={handleDelete} onCancel={handleCancel}>
          정말 삭제하시겠습니까?
        </Modal>
      )}
    </>
  );
};

export default DeleteButton;
