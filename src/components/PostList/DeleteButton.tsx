import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
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
    let toastId: string | null = null;
    if (isLoading) {
      toastId = toast.loading('삭제 요청중...');
    }
    return () => {
      toastId && toast.dismiss(toastId);
    };
  }, [isLoading]);

  useEffect(() => {
    error && toast.error('삭제 실패');
  }, [error]);

  useEffect(() => {
    if (data) {
      toast.success('삭제 완료!');
      refresh();
    }
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
