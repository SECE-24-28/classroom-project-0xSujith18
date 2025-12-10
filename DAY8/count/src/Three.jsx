import { useContext } from 'react';
import DataContext from './DataContext';

function Three() {
  const { dec } = useContext(DataContext);
  
  return (
    <button onClick={dec}>-</button>
  );
}

export default Three;