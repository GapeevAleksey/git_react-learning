import React from 'react';
import '../app/app.css';

interface ModalProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, title, onClose }) => {
  return (
    <>
      <div className="modal-background" onClick={onClose}>
        <div className="modal-body">
          <h5>{title}</h5>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
