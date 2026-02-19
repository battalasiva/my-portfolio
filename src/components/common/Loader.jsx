import React from 'react';
import { LoaderContainer, Spinner } from './Loader.styles';

const Loader = ({ size, minHeight }) => {
  return (
    <LoaderContainer minHeight={minHeight}>
      <Spinner size={size} />
    </LoaderContainer>
  );
};

export default Loader;