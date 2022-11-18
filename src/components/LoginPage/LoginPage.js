import React from 'react';
import LoginForm from '../Login-form/Login-form';
import { Link } from 'react-router-dom';
import { Flex, Box, useColorMode, Button, Alert, AlertIcon } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const LoginPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex direction='column' align='center'>
      <Button onClick={toggleColorMode} w='30%' mt='1em'
        variant='outline'>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
      <h1 className='auth-title'>Sign in</h1>

      <LoginForm />

      <Box mt='1.5em' fontSize='20px'
      >Still have no account? <Link to='/registration' className='auth-link'>
          Sign up</Link></Box>
    </Flex>
  )
};

export default LoginPage;