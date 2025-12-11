import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css' 

function App() {
  const[Slist,setsList]=useState([])
  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const res=await api.get('/student')
        setsList(res.data)
      }catch(err){
        console.error(err)
      }
    }
    fetchData()
  },[])
  return (
    <>
    {
    Slist.map((stu)=>(
     <p>
      {stu.id} {stu.name} {stu.marks}
     </p>
    ))}
    
    </>
  )
}
export default App
