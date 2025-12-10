import { createContext, useContext, useState } from "react";

const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [list, setList] = useState([
    {id:1, sname:"Virat", fee:true},
    {id:2, sname:"Sachin", fee:false},
    {id:3, sname:"Raja", fee:true}
  ]);
  const [newStudent, setNewStudent] = useState("");
  const [search, setSearch] = useState("");

  const handleDelete = (id) => {
    const newList = list.filter((ls) => ls.id !== id);
    setList(newList);
  };

  const handleCheck = (id) => {
    const newList = list.map((ls) => (ls.id === id) ? ({...ls, fee:!ls.fee}) : (ls));
    setList(newList);
  };

  const handleAdd = () => {
    if(newStudent.trim()){
      const newId = list.length > 0 ? Math.max(...list.map(ls => ls.id)) + 1 : 1;
      setList([...list, {id:newId, sname:newStudent, fee:false}]);
      setNewStudent("");
    }
  };

  const filteredList = list.filter((ls) => ls.sname.toLowerCase().includes(search.toLowerCase()));

  return (
    <StudentContext.Provider value={{ 
      list: filteredList, 
      newStudent, 
      setNewStudent, 
      search, 
      setSearch, 
      handleDelete, 
      handleCheck, 
      handleAdd 
    }}>
      {children}
    </StudentContext.Provider>
  );
}

export const useStudent = () => useContext(StudentContext);