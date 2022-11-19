import React, { useEffect, useState } from 'react'

import { Input, InputGroup, InputRightAddon } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import { changeSearchFilter } from '../store/slices/searchSlice';

import './Searchbar.css';
import { useDispatch } from 'react-redux';

const Searchbar = () => {
  const dispatch = useDispatch();
  const [searchtext, setSearchText] = useState('');

  useEffect(() => {
    dispatch(changeSearchFilter(searchtext));
  }, [searchtext])


  return (
    <InputGroup mt='3em'>
      <Input id='search' icon={<SearchIcon />}
        placeholder="Search by task..."
        value={searchtext} onChange={(e) => setSearchText(e.target.value)}
        borderColor='rgb(122,122,122)'
      />
      <InputRightAddon children={<SearchIcon />} bgColor='transparent' borderColor='rgb(122,122,122)' />
    </InputGroup>
  )
};

export default Searchbar;