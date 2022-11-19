import React from 'react';

import { fetchTodos } from '../store/slices/todoSlice';
import { useDispatch, useSelector } from 'react-redux';

import FilterBlock from '../Filter-block';
import Searchbar from '../Searchbar';
import TodoForm from '../Todo-form';
import TodoList from '../Todo-list';
import SidebarMenu from '../Sidebar/Sidebar';
import { Box, Button, Flex } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import { useProSidebar } from 'react-pro-sidebar';
import { Navigate } from 'react-router-dom';

import './HomePage.css';

const HomePage = () => {
  const { toggleSidebar } = useProSidebar();
  const dispatch = useDispatch();
  const { loadingStatus, errorStatus } = useSelector(state => state.todoReducer);

  const email = useSelector(state => state.user.userEmail);

  return (
    email ?
      <Flex direction={{
        xll: 'row', xl: 'row',
        lg: 'row', md: 'column',
        s: 'column', xs: 'column'
      }} justify='flex-start'>
        <Box>
          <HamburgerIcon onClick={() => toggleSidebar()} fontSize='40px'
            display={{
              xll: 'none', xl: 'none',
              lg: 'block', md: 'block',
              s: 'block', xs: 'block'
            }}
            m={{
              xll: '2em 0 0 2em', xl: '1em 0 0 1em',
              lg: '15px 0 0 15px', md: '15px 0 0 15px',
              s: '15px 0 0 15px', xs: '15px 0 0 15px'
            }} />
          <SidebarMenu />
        </Box>
        <Box className='content-wrapper'>
          <Button onClick={() => dispatch(fetchTodos())}
            variant='outline' mt={{ lg: '3em', xs: '1.5em' }}>Get random tasks</Button>
          <FilterBlock />

          {loadingStatus === 'loading' && <h2>Loading...</h2>}
          {errorStatus && <h2>Error...</h2>}

          <Searchbar />
          <TodoList />
          <TodoForm />
        </Box>
      </Flex> : <Navigate to='/login' />
  )
}
export default HomePage;