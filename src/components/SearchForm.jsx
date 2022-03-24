import React from 'react'

const SearchForm = ({ handleSearch, setSearchQuery}) => {
  return (
    <form 
    className='search-form' 
    onSubmit={handleSearch}
    spellCheck='false'
  >
    <input 
      placeholder='search photos...'
      type="text" 
      onChange={(e) => setSearchQuery(e.target.value)}
      />
  </form> 
  )
}

export default SearchForm