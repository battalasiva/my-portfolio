import React, { useEffect } from 'react';
import { ToastContainer, ToastMessage } from './Toast.styles';

const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <ToastContainer>
      <ToastMessage type={type}>
        <span>{type === 'success' ? '✓' : '✕'}</span>
        <span>{message}</span>
      </ToastMessage>
    </ToastContainer>
  );
};

export default Toast;