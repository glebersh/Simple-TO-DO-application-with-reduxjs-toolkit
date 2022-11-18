import { Flex, Box, useColorMode, Button, Avatar } from '@chakra-ui/react';
import React from 'react';
import './Sidebar.css';
import { useDispatch } from 'react-redux';
import { changeDateFilter } from '../slices/dateSlice';
import { CalendarIcon, BellIcon, TimeIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import dayjs from 'dayjs';
import { removeUser } from '../slices/usersSlice';

const Sidebar = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useDispatch();
  const today = dayjs().format("YYYY-MM-DD");
  const tomorrow = dayjs().add(1, 'day').format("YYYY-MM-DD");

  return (
    <Flex className='sidebar' direction='column'>
      <Flex m='3em auto 0' align='center'>
        <Avatar size='md' mr='1em' />
        <Flex direction='column'>
          <span>{props.userEmail}</span>
          <Button variant='link' colorScheme='black'
            onClick={() => dispatch(removeUser())}>Log out</Button>
        </Flex>
      </Flex>
      <Button onClick={toggleColorMode} w='30%' m='3em auto 0'
        display='block'
        variant='outline'>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>

      <Box m='1.75em 0 0 2.8em'>
        <TimeIcon fontSize='22px' />
        <Button onClick={() => dispatch(changeDateFilter(today))}
          variant='outline'
          ml='1em'
          minW='120px'>Today</Button>
      </Box>
      <Box m='1.75em 0 0 2.8em' >
        <BellIcon fontSize='24px' mr='-2px' />
        <Button onClick={() => dispatch(changeDateFilter(tomorrow))}
          variant='outline'
          ml='1em' fontWeight='700'
          minW='120px'>Tomorrow</Button>
      </Box>
      <Box m='1.75em 0 0 2.8em'>
        <CalendarIcon fontSize='22px' />
        <Button onClick={() => dispatch(changeDateFilter(''))}
          variant='outline'
          ml='1em'
          minW='120px'>All dates</Button>
      </Box>
    </Flex>
  )
};

export default Sidebar;