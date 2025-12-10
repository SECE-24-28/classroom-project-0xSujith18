import React, { useContext } from 'react';
import DataContext from './DataContext';

function One() {
  const { num } = useContext(DataContext);
  
  return (
    <div>
      <h1>Counter Value: {num}</h1>
    </div>
  );
}

export default One;