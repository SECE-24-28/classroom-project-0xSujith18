import React from 'react'
import { useContext } from 'react'
import DataContext from './DataContext'

const Counter = () => {
  const {count, count_nums, reset} = useContext(DataContext);
  
  return (
    <div>
      <p>{count}</p>
      <button onClick={count_nums}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter