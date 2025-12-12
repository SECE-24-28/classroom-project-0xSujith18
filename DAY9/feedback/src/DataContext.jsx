import { format } from "date-fns";
import {  createContext, useEffect, useState } from "react";
import api from './api/Post'


const DataContext=createContext()
export const DataProvider=({children})=>
{

  const [posts,setPosts]=useState([])
  const [search,setSearch] = useState("") 
  const [searchResult,setSearchResult]=useState([])
  const [title,setTitle]=useState('')
  const [body,setBody]=useState('')
  const [num,setNum]=useState(100)

  useEffect(()=>
  {
    const fetData=async()=>{
      try {
        const res = await api.get("/feedback");
        setPosts(res.data || [])
      } catch (error) {
        console.error('Error fetching posts:', error)
        setPosts([])
      }
    }
    fetData()
  },[])


  useEffect(()=>
  {
    const filterd=posts.filter((post)=>post.title && (post.title.toLowerCase()).includes(search.toLowerCase()))
    setSearchResult(filterd)
  },[posts,search])


  const handleSubmit=async(e)=>
  {
    e.preventDefault()
    const id = (posts.length)?(Number(posts[posts.length-1].id)+1):(1)
    const datetime = format(new Date(), "MMM dd,yyyy pp")
    const newObj={id,title,datetime,body}
    try {
      await api.post("/feedback",newObj)
      const newList=[...posts,newObj]
      setPosts(newList)
      setTitle('')
      setBody('')
    } catch (error) 
    {
      console.error('Error adding post:', error)
    }
  }

    return (
        <DataContext.Provider value={{posts,title,setTitle,body,setBody,search,setSearch,searchResult,handleSubmit,num,setNum}}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext