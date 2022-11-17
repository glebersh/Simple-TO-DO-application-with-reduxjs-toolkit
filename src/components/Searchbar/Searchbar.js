import React, { useEffect, useState } from 'react'
import './Searchbar.css';
import { changeSearchFilter } from '../slices/searchSlice';
import { useDispatch } from 'react-redux';

const Searchbar = () => {

  const dispatch = useDispatch();
  const [searchtext, setSearchText] = useState('');

  // const searchFilterList = (text) => {
  //   setSearchText(text);
  //   dispatch(changeSearchFilter(searchtext));
  // };

  useEffect(() => {
    dispatch(changeSearchFilter(searchtext));
  }, [searchtext]);

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