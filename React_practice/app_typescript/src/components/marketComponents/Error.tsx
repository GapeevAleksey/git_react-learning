import React from 'react';
interface IError {
  error: string;
}

const Error: React.FC<IError> = ({ error }) => {
  return <h5>{error}</h5>;
};

export default Error;
