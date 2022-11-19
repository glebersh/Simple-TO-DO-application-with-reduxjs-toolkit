import { Flex, Box, useColorMode, Button, Avatar } from '@chakra-ui/react';
import React from 'react';
import './Sidebar.css';
import { useDispatch } from 'react-redux';
import { changeDateFilter } from '../slices/dateSlice';
import { CalendarIcon, BellIcon, TimeIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import dayjs from 'dayjs';
import { removeUser } from '../slices/usersSlice';
import { Sidebar } from 'react-pro-sidebar';

const SidebarMenu = () => {

  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useDispatch();
  const today = dayjs().format("YYYY-MM-DD");
  const tomorrow = dayjs().add(1, 'day').format("YYYY-MM-DD");

  return (
    <Sidebar collapsedWidth='0px' customBreakPoint='1199px'
      transitionDuration={300}
      className='sidebar'
      backgroundColor={colorMode === 'light' ? 'white' : '#202020'}
      overlayColor='rgba(33,33,33,0.73)'
      style={{ "borderColor": 'rgba(180,180,180,0.5)' }}>

      <Flex className='sidebar' direction='column'>
        <Flex m='3em auto 0' align='center' >
          <Avatar size='md' mr='1em' />
          <Flex direction='column'>
            <span>123</span>
            <Button variant='link' colorScheme='black'
              onClick={() => dispatch(removeUser())}>Log out</Button>
          </Flex>
        </Flex >

        <Flex direction='column' align='center'>
          <Button onClick={toggleColorMode} w='75px' m='3em auto 0'
            display='block'
            variant='outline'>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>

          <Box ml='-2em' mt='1.5em'>
            <TimeIcon
              fontSize={{
                xll: '22px', xl: '18px'
              }} mr='.75em' />

            <Button onClick={() => dispatch(changeDateFilter(today))}
              variant='outline'
              minW='100px'>Today</Button>
          </Box>

          <Box ml='-2em' mt='1.5em'>
            <BellIcon
              fontSize={{
                xll: '24px', xl: '20px'
              }} mr='.75em' />

            <Button onClick={() => dispatch(changeDateFilter(tomorrow))}
              variant='outline'
              minW='100px'>Tomorrow</Button>
          </Box>

          <Box ml='-2em' mt='1.5em'>
            <CalendarIcon
              fontSize={{
                xll: '22px', xl: '18px'
              }} mr='.75em' />

            <Button onClick={() => dispatch(changeDateFilter(''))}
              variant='outline'
              minW='100px'>All dates
            </Button>
          </Box>

        </Flex>
      </Flex >
    </Sidebar >
  )
};

export default SidebarMenu;