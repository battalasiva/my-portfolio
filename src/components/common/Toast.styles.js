import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const ToastContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10000;
  animation: ${slideIn} 0.3s ease-out;
`;

export const ToastMessage = styled.div`
  background-color: ${props => props.type === 'success' ? '#4caf50' : '#f44336'};
  color: white;
  padding: 15px 25px;
  border-radius: 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.4rem;
  min-width: 300px;
`;