import React, { useState } from 'react'
import './Searchbar.css';

const Searchbar = () => {
  const [searchtext, setSearchText] = useState('');

  return (
    <label className='searchbar__label'
      htmlFor='searchbar'>
      <input className='searchbar__input' id='search'
        type='search'
        placeholder="Search"
        value={searchtext} onChange={(e) => setSearchText(e.target.value)}
      />
    </label>
  )
};

export default Searchbar;