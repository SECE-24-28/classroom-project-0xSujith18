import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Gallery from './Gallery'
import Home from './Home'
import About from './About'
import PostPage from './PostPage'

function App() 
{
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/post">PostPage</Link></li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<PostPage />} />
      </Routes>
    </div>
  )
}

export default App
