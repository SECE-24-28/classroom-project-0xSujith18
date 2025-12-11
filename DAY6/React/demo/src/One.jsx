import React from 'react'
import { useContext } from 'react'
import DataContext from './DataContext'

const One = () => {
  const {count_nums}=useContext(DataContext)
    return (
    <div>
      <button onClick={count_nums}>Click</button>
    </div>
  )
}

export default One