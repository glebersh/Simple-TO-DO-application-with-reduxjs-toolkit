import React, { useEffect, useState } from 'react'
import './Searchbar.css';
import { changeSearchFilter } from '../slices/searchSlice';
import { useDispatch } from 'react-redux';
import { Input, InputGroup, InputRightAddon } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const Searchbar = () => {
  const [searchtext, setSearchText] = useState('');

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