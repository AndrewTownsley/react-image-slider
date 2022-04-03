import React from 'react'

const SearchForm = ({ handleSearch, setSearchQuery}) => {
  return (
    <form 
    data-testid='searchForm'
    className='search-form' 
    onSubmit={handleSearch}
    spellCheck='false'
  >
    <input 
      data-testid='searchInput'
      placeholder='search photos...'
      type="text" 
      onChange={(e) => setSearchQuery(e.target.value)}
      />
  </form> 
  )
}

export default SearchForm