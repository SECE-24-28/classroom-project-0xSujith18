import { useEffect, useState } from 'react'
import './App.css'
import api from './api/Post'
import Home from './Home.jsx'
import Search from './Search'
import AddPost from './AddPost.jsx'

function App() {
  const [post, setpost] = useState([])
  const [search, setsearch] = useState('')
  const[searchResults,setSearchResults]=useState([])
  const[title,settitle]=useState('')
  const[content,setcontent]=useState('')

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await api.get('/feedback')
        setpost(res.data || [])
      } catch (error) {
        console.error('Error fetching posts:', error)
        setpost([])
      }
    }
    fetchPosts();
  }, [])

useEffect(()=>
{
  const filterd=post.filter((post)=>
    (post.title).includes(search)
)
setSearchResults(filterd)
},[post,search]
)

return(
  <>

<Search search={search} setsearch={setsearch}
  />
  <hr/>
  <AddPost/>
    <Home posts={searchResults} />
  </>
)
}

export default App