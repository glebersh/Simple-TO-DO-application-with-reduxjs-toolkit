import React from 'react';
import RegisterForm from '../register-form/Register-form';
import { Link } from 'react-router-dom';
import { Flex, Box, useColorMode, Button } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const RegisterPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex direction='column' align='center'>

      <Button onClick={toggleColorMode} w='30%' mt='1em'
        variant='outline'>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>

      <h1 className='auth-title'>Sign up</h1>
      <RegisterForm />
      <Box mt='1.5em' fontSize='20px'
      >Already have an account? <Link to='/login' className='auth-link'>Login</Link></Box>
    </Flex>
  )
};

export default RegisterPage;