import { createContext, useState } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [num, setNum] = useState(0);
  const inc = () => {
    setNum(prev => prev + 1)
  }
  const dec = () => {
    setNum(prev => prev - 1)
  }
  return (
    <DataContext.Provider value={{ num, inc, dec }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
