import React from 'react';
import FormNotice from 'components/Form/FormNotice';
import Form from 'components/Form';

const FormPage = () => {
  return (
    <div>
      <h2>리뷰 신청하기</h2>
      <FormNotice />
      <Form />
    </div>
  );
};

export default FormPage;
