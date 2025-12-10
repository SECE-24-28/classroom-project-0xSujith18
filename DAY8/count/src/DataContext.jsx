// import { useState } from "react";

// function useDataCounter() {
//   const [count, setCount] = useState(0);

//   const increase = () => setCount((c) => c + 1);
//   const decrease = () => setCount((c) => c - 1);

//   return { count, increase, decrease };
// }

// export default useDataCounter;
import { createContext, useContext, useState } from "react";

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
