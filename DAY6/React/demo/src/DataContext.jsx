import React, {createContext, useState} from 'react'

const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [count,setCount]=useState(0);
  
    const count_nums = () => {
        setCount(count + 1);
    }

    const reset=()=>{
        setCount(0);
    }

    const reduce=()=>{
        if(count>0){
            setCount(count-1);
        }
    }

    return (
        <DataContext.Provider value={{count,setCount,count_nums,reset,reduce}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;