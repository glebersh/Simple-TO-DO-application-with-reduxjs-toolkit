import React from 'react';
import FilterBlock from '../Filter-block';
import Searchbar from '../Searchbar';
import TodoForm from '../Todo-form';
import TodoList from '../Todo-list';
import './App.css';

import { Box, Button, useColorMode } from '@chakra-ui/react';

import { fetchTodos } from '../slices/Todo-slice';
import { useDispatch, useSelector } from 'react-redux';
import ErrorBoundary from '../error-boundary/error-boundary';
import RegisterForm from '../register-form/Register-form';

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useDispatch();
  const { loadingStatus,
    errorStatus } = useSelector(state => state.todoReducer);

  return (
    <ErrorBoundary>
      <Box w='50%' m='0 auto'>
        {loadingStatus === 'loading' && <h2>Loading...</h2>}
        {errorStatus && <h2>Error...</h2>}
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
        <button onClick={() => dispatch(fetchTodos())}>Get data from API</button>
        <FilterBlock />
        <Searchbar />
        <TodoList />
        <TodoForm />
        <RegisterForm />
      </Box>
    </ErrorBoundary>
  )
};

export default App;