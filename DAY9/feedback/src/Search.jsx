import React from 'react'

const Search = ({search, setsearch}) => {
  return(
    <>
      <input type="text" value={search}
        onChange={(e)=>setsearch(e.target.value)}
        placeholder="Search posts..."
      />
    </>
  )
}

export default Search
