import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 500;
  color: #333;
`;

export const Input = styled.input`
  padding: 12px 15px;
  font-size: 1.4rem;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: crimson;
  }

  &::placeholder {
    color: #999;
  }
`;

export const TextArea = styled.textarea`
  padding: 12px 15px;
  font-size: 1.4rem;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  min-height: 100px;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: crimson;
  }

  &::placeholder {
    color: #999;
  }
`;

export const ErrorText = styled.span`
  color: #f44336;
  font-size: 1.2rem;
  margin-top: 4px;
`;