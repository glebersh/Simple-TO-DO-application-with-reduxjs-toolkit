import { Flex, useColorMode, Button } from '@chakra-ui/react';
import React from 'react';
import './Sidebar.css';
import { useDispatch } from 'react-redux';
import { changeDateFilter } from '../slices/dateSlice';
import dayjs from 'dayjs';

const Sidebar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useDispatch();
  const today = dayjs().format("YYYY-MM-DD");
  const tomorrow = dayjs().add(1, 'day').format("YYYY-MM-DD");



  return (
    <div className='sidebar'>
      <Flex>
        <img />
        <span>First Name / Last Name</span>
      </Flex>
      <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? 'Dark' : 'Light'} Mode
      </Button>

      <Button onClick={() => dispatch(changeDateFilter(today))}>Today</Button>

      <Button onClick={() => dispatch(changeDateFilter(tomorrow))}>Tomorrow</Button>

      <Button onClick={() => dispatch(changeDateFilter(''))}>All dates</Button>
    </div>
  )
};

export default Sidebar;