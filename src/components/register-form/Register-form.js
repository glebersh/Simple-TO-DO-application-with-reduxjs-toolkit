import { Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUserAsync } from '../slices/usersSlice';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Flex direction='column' mt='5em' justify='space-between' h='100px'>
      <input type='text' onChange={(e) => setLogin(e.target.value)}></input>
      <input type='password' onChange={(e) => setPassword(e.target.value)}></input>
      <input type='submit' onClick={() => dispatch(addUserAsync({ login, password }))}></input>
    </Flex >
  )
};

export default RegisterForm;