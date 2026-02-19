import React from 'react';
import { ErrorContainer, ErrorIcon, ErrorMessage, RetryButton } from './ErrorDisplay.styles';

const ErrorDisplay = ({ message, onRetry, minHeight }) => {
  return (
    <ErrorContainer minHeight={minHeight}>
      <ErrorIcon>⚠️</ErrorIcon>
      <ErrorMessage>{message || 'Something went wrong. Please try again.'}</ErrorMessage>
      {onRetry && <RetryButton onClick={onRetry}>Retry</RetryButton>}
    </ErrorContainer>
  );
};

export default ErrorDisplay;