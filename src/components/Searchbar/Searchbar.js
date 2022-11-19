import React, { useState } from 'react'

import { Input, InputGroup, InputRightAddon } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import './Searchbar.css';

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