import React from 'react'
import { useStudent } from './StudentContext'

export const Footer = () => {
  const { list } = useStudent();
  
  return (
    <div>
      <h1>Students Count - {list.length}</h1>
    </div>
  )
}