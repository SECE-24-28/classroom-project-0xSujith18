import { useEffect, useState } from 'react'
import './App.css'
import { addCourses, getCourses, deleteCourses, updateCourses } from './api/CourseApi'

function App() {
  
  const [courses,setCourses]=useState([])
  const [title,setTitle]=useState("")
  const [editId,setEditId]=useState("")
  const [duration,setDuration]=useState("")
  
  const fetchCourse=async()=>
  {
    try {
      const res=await getCourses();
      setCourses(res.data)
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  }

 useEffect(() => {
  const loadCourses = async () => {
    await fetchCourse()
  }

  loadCourses()
}, [])

  const handleSubmit=async(e)=>
  {
    e.preventDefault();
    try {
      await addCourses({title,duration})
      await fetchCourse()
      setTitle('')
      setDuration('');
    } catch (error) {
      console.error('Error adding course:', error);
    }
  }

  const handleDelete=async(id)=>
  {
    try {
      await deleteCourses(id);
      fetchCourse();
      alert("Deletion successfully");
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  }

  const handleEdit=(course)=>
  {
    setTitle(course.title);
    setDuration(course.duration);
    setEditId(course._id);
  }

  const update=async()=>
  {
    try {
      await updateCourses(editId,{title,duration})
      setTitle("")
      setDuration("")
      setEditId("")
      fetchCourse()
    } catch (error) {
      console.error('Error updating course:', error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <input type="text" value={duration} onChange={(e)=>setDuration(e.target.value)}/>

        <button type="submit">Add Course</button>
        <button onClick={update} type="button">Update Course</button>
      </form>
      {
        courses.map((course)=>{
          return <li key={course._id}>
            {course.title}-{course.duration}
            <button onClick={()=>handleEdit(course)}>Click Me</button>
            <button onClick={()=>handleDelete(course._id)}>Delete</button>
          </li>
        })
     }
          
    </>
  )
}

export default App