import React from 'react';
import FilterBlock from '../Filter-block';
import Searchbar from '../Searchbar';
import TodoForm from '../Todo-form';
import TodoList from '../Todo-list';
import RegisterForm from '../register-form/Register-form';
import './App.css';

import { Box, Button } from '@chakra-ui/react';

import { fetchTodos } from '../slices/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
import ErrorBoundary from '../error-boundary/error-boundary';
import Sidebar from '../Sidebar/Sidebar';

const App = () => {

  const dispatch = useDispatch();
  const { loadingStatus,
    errorStatus } = useSelector(state => state.todoReducer);

  return (
    <ErrorBoundary>
      <Box className='app'>
        <Sidebar />
        {loadingStatus === 'loading' && <h2>Loading...</h2>}
        {errorStatus && <h2>Error...</h2>}
        <Box display='inline-block' width='75%' m='0 auto 0 0'>
          <Button onClick={() => dispatch(fetchTodos())}
            variant='outline' mt='3em'>Get random tasks</Button>
          <FilterBlock />
          <Searchbar />
          <TodoList />
          <TodoForm />
        </Box>
      </Box>
    </ErrorBoundary>
  )
};

export default App;