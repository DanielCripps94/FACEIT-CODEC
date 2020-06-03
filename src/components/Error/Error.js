import React from 'react';
import Button from '../Button';
import './Error.css';

const Error = ({ dispatch, fetchAction }) => {
  return (
    <div className="error">
      <p>Something went wrong.</p>
      <Button onClick={() => dispatch(fetchAction())}>Retry</Button>
    </div>
  );
};

export default Error;
