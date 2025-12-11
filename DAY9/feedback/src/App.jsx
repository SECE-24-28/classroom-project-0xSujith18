import { useEffect, useState } from 'react'
import './App.css'
import api from './api/Post'
import Home from './Home.jsx'
import Search from './Search'

function App() {
  const [post, setpost] = useState([])
  const [search, setsearch] = useState('')
  const[searchResults,setSearchResults]=useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await api.get('/feedback')
        setpost(res.data || [])
      } catch (error) {
        console.error('Error fetching posts:', error)
        // Try alternative endpoints or use mock data
        setpost([
          { id: 1, title: 'Sample Post 1', content: 'This is sample content 1' },
          { id: 2, title: 'Sample Post 2', content: 'This is sample content 2' }
        ])
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
    <Home posts={searchResults} />
  </>
)
}

export default App