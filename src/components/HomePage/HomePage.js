import React from 'react';
import FilterBlock from '../Filter-block';
import Searchbar from '../Searchbar';
import TodoForm from '../Todo-form';
import TodoList from '../Todo-list';
import './HomePage.css';
import { fetchTodos } from '../slices/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Flex } from '@chakra-ui/react';
import SidebarMenu from '../Sidebar/Sidebar';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useProSidebar } from 'react-pro-sidebar';

const HomePage = () => {
  const { toggleSidebar } = useProSidebar();
  const dispatch = useDispatch();
  const { loadingStatus, errorStatus } = useSelector(state => state.todoReducer);

  return (
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
    </Flex>
  )
}
export default HomePage;