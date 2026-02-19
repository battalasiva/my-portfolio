import styled from 'styled-components';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: ${props => props.minHeight || '200px'};
  padding: 20px;
  text-align: center;
`;

export const ErrorIcon = styled.div`
  font-size: 4rem;
  color: crimson;
  margin-bottom: 15px;
`;

export const ErrorMessage = styled.p`
  font-size: 1.6rem;
  color: #333;
  margin-bottom: 20px;
`;

export const RetryButton = styled.button`
  padding: 10px 25px;
  background-color: crimson;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.4rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #b91c1c;
    transform: translateY(-2px);
  }
`;