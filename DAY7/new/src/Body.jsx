import React from 'react'
import { useStudent } from './StudentContext'

export const Body = () => {
  const { list, handleCheck, handleDelete } = useStudent();
  
  return (
    <div>
      <ul>
        {
          list.map((ls) =>
            <li key={ls.id}>
              <input type="checkbox" checked={ls.fee} 
                     onChange={() => handleCheck(ls.id)} />
              <label>{ls.sname}</label>
              <button onClick={() => handleDelete(ls.id)}>Delete</button>
            </li>
          )
        }
      </ul>
    </div>
  )
}