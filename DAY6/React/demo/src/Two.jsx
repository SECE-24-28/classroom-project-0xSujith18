import React from 'react'
import { useContext } from 'react'
import DataContext from './DataContext'

const Two = () => {
    const {reset}=useContext(DataContext)
    return (
    <div>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Two