import { useEffect, useState } from 'react'
import './App.css'
import { getCourses } from './api/CourseApi'

function App() {
  
  const [courses,setCourses]=useState([])
  const [title,setTitle]=useState("")
  const [duration,setDuration]=useState("")
  
  const fetchCourse=async()=>{
    const res=await getCourses();
    setCourses(res.data)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(title && duration){
      // Add course logic here
      setTitle("")
      setDuration("")
    }
  }

 useEffect(() => {
  const loadCourses = async () => {
    await fetchCourse()
  }

  loadCourses()
}, [])


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Course Title" />
        <input type="text" value={duration} onChange={(e)=>setDuration(e.target.value)} placeholder="Duration" />
        <button type="submit">Add Course</button>
      </form>

      <ul>
        {courses.map((course, index) => (
          <li key={course.id || index}>
            {course.title} - {course.duration}
          </li>
        ))}
      </ul>
          
    </>
  )
}

export default App
