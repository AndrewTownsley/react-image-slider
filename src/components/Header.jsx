import React from 'react'
import SearchForm from './SearchForm'
import { MdOutlineCamera } from 'react-icons/md';

const Header = ({ handleSearch, setSearchQuery}) => {
  return (
    <header>
    <div className='header-left-search'>
      <h1><MdOutlineCamera/></h1>
      <SearchForm
        handleSearch={handleSearch}
        setSearchQuery={setSearchQuery}
        data-testid='searchForm'
      />
    </div>
    <div>
      <h1>SHUTTERSEARCH</h1>
    </div>
  </header>
  )
}

export default Header