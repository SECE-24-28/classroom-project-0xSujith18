import { useContext } from 'react'
import './App.css'
import Home from './Home.jsx'
import Search from './Search'
import AddPost from './AddPost.jsx'
import DataContext from './DataContext'

function App() {
  const { search, setSearch, searchResult, title, setTitle, body, setBody, handleSubmit, num } = useContext(DataContext)

  return(
    <>
      <Search search={search} setSearch={setSearch} />
      <hr/>
      <AddPost 
        title={title} 
        setTitle={setTitle}
        body={body}
        setBody={setBody}
        handleSubmit={handleSubmit}
      />
      <Home posts={searchResult} />
    </>
  )
}

export default App