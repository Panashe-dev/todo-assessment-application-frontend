import React from 'react';
import { Spinner } from 'reactstrap';

const Loader = () => {
  return (
    <div className='mt-4'>
      <Spinner
        animation='border'
        role='status'
        style={{
          width: '100px',
          height: '100px',
          margin: 'auto',
          display: 'block'
        }}
      >
        <span className='sr-only'>Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
