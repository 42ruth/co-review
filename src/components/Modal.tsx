import React, { useEffect, useState } from 'react';
import 'assets/css/Modal.css';

interface ModalProp {
  children: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Modal = ({ children, onConfirm, onCancel }: ModalProp) => {
  useEffect(() => {
    document.body.style.cssText = `overflow: hidden`;
    return () => {
      document.body.style.cssText = `overflow: auto`;
    };
  }, []);

  return (
    <div className="Modal">
      <div className="backdrop" onClick={onCancel}></div>
      <div className="box">
        <div className="header">
          <button onClick={onCancel}>❌</button>
        </div>
        <div className="content">{children}</div>
        <div className="button-box">
          <button className="button cancel" onClick={onCancel}>
            취소
          </button>
          <button className="button confirm" onClick={onConfirm}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
