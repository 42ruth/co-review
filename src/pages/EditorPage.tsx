import React from 'react';
import EditorNotice from 'components/Editor/EditorNotice';
import Editor from 'components/Editor';

const EditorPage = () => {
  return (
    <div>
      <h2>리뷰 신청하기</h2>
      <EditorNotice />
      <Editor />
    </div>
  );
};

export default EditorPage;
