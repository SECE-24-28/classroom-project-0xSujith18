import { useContext, useState } from 'react'
import './App.css'
import Home from './component/Home'
import { DataContext } from './context/DataContext';
import Search from './component/Search';
import AddPost from './component/AddPost';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { EditPost } from './component/EditPost';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  
  return (
    
    <div>
      <ol>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/newpost'>NewPost</Link></li>
      </ol>
      <Routes>
        <Route path='/' element={
          <>
            <div>
              <button id="homebtn" onClick={() => setActiveTab('home')}>Home</button>
              <button id="searchbtn" onClick={() => setActiveTab('search')}>Search</button>
            </div><br />
            {activeTab === 'home' ? <Home /> : <Search />}
          </>
        }></Route>
        <Route path='/newpost' element={<AddPost/>}></Route>
        <Route path='/editpost/:id' element={<EditPost/>}></Route>
      </Routes>
    </div>
  )
}

export default App

