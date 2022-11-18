import React, { useEffect } from 'react';
import FilterBlock from '../Filter-block';
import Searchbar from '../Searchbar';
import TodoForm from '../Todo-form';
import TodoList from '../Todo-list';
import Sidebar from '../Sidebar/Sidebar';
import './HomePage.css';
import { fetchTodos } from '../slices/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button } from '@chakra-ui/react';
import { useAuthentification } from '../hooks/useAuthentification';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const dispatch = useDispatch();
  const { loadingStatus,
    errorStatus } = useSelector(state => state.todoReducer);

  const { isAuth, email } = useAuthentification();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth === false) {
      navigate('/login');
    }
  }, []);


  if (isAuth === false) {
    navigate('/login');
  }
  else {
    return (
      <>
        <Sidebar userEmail={email} />
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
      </>
    )
  }
};

export default HomePage;