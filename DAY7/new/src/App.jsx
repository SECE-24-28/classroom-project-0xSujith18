import './App.css'
import Header from './Header';
import { Body } from './Body';
import { Footer } from './Footer';
import { StudentProvider, useStudent } from './StudentContext';

const StudentControls = () => {
  const { newStudent, setNewStudent, search, setSearch, handleAdd } = useStudent();

  return (
    <>
      <div>
        <input 
          type="text" 
          placeholder="Add student" 
          value={newStudent} 
          onChange={(e) => setNewStudent(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        <input 
          type="text" 
          placeholder="Search" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </>
  );
};

function App() {
  return (
    <StudentProvider>
      <Header title="Student List" />
      <StudentControls />
      <Body />
      <Footer />
    </StudentProvider>
  )
}
export default App