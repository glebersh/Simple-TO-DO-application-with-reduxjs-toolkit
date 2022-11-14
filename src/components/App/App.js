import React from 'react';
import FilterBlock from '../Filter-block';
import Searchbar from '../Searchbar';
import TodoForm from '../Todo-form';
import TodoList from '../Todo-list';
import './App.css';

import { Box, Button, useColorMode } from '@chakra-ui/react';

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box w='50%' m='0 auto'>
      <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? 'Dark' : 'Light'} Mode
      </Button>
      <FilterBlock />
      <Searchbar />
      <TodoList />
      <TodoForm />
    </Box>
  )
};

export default App;