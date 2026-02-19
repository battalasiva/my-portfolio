import styled from 'styled-components';

export const AddButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: crimson;
  color: white;
  border: none;
  font-size: 3rem;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(220, 20, 60, 0.4);
  transition: all 0.3s ease;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 16px rgba(220, 20, 60, 0.6);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  font-size: 2.4rem;
  cursor: pointer;
  padding: 5px;
  transition: all 0.3s ease;
  color: crimson;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const EditButton = styled.button`
  padding: 10px 20px;
  background-color: crimson;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.4rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 20px;

  &:hover {
    background-color: #b91c1c;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const FormButton = styled.button`
  padding: 12px 30px;
  font-size: 1.6rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;

  ${props => props.primary ? `
    background-color: crimson;
    color: white;
    &:hover {
      background-color: #b91c1c;
    }
  ` : `
    background-color: #e0e0e0;
    color: #333;
    &:hover {
      background-color: #d0d0d0;
    }
  `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  justify-content: flex-end;
  margin-top: 25px;
`;