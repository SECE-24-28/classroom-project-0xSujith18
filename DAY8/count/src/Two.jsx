import { useContext } from 'react';
import DataContext from './DataContext';

function Two() {
  const { inc } = useContext(DataContext);
  
  return (
    <button onClick={inc}>+</button>
  );
}

export default Two;