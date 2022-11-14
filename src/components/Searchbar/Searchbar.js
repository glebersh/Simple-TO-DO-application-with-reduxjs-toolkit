import React, { useState } from 'react'
import './Searchbar.css';
import { useDispatch } from 'react-redux';
import { searchItem } from '../slices/Todo-slice';

const Searchbar = () => {
  const [searchtext, setSearchText] = useState('');

  return (
    <>
      <label htmlFor='searchbar'>
        <input id='search'
          type='search'
          value={searchtext} onChange={(e) => setSearchText(e.target.value)}
        />
        <button>Search</button>
      </label>
    </>
  )
};

export default Searchbar;