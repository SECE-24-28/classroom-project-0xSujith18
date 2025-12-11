import React from 'react'
import { useContext } from 'react'
import DataContext from './DataContext'

const Three = () => {
    const {reduce}=useContext(DataContext);
    return (
    <div>
        <button onClick={reduce}>Reduce</button>
    </div>
  )
}

export default Three