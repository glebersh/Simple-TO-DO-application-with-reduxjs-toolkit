import { Flex, useColorMode, Button } from '@chakra-ui/react';
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div className='sidebar'>
      <Flex>
        <img />
        <span>First Name / Last Name</span>
      </Flex>
      <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? 'Dark' : 'Light'} Mode
      </Button>
    </div>
  )
};

export default Sidebar;