import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${props => props.minHeight || '200px'};
  width: 100%;
`;

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: crimson;
  border-radius: 50%;
  width: ${props => props.size || '50px'};
  height: ${props => props.size || '50px'};
  animation: ${spin} 1s linear infinite;
`;