import React, { useState } from 'react';

import {
  Button, Input, Flex, FormLabel,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

import './Form.css';

const Form = ({ title, loginHandler, requestState }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Flex direction='column' align='center'>

      {requestState === 'error' || requestState === 'success' ?
        <Alert status={requestState} w='100%' flexWrap='wrap' display='flex'>
          <AlertIcon />
          <AlertTitle w='90%'>{requestState === 'error' ?
            'Something went wrong. . . ' :
            `Operation was successfully completed!`}</AlertTitle>
          <AlertDescription>{requestState === 'error' ?
            'Check your email or password and try again later' : null}</AlertDescription>
        </Alert> : null}

      <Flex align='flex-start' direction='column'>
        <FormLabel htmlFor='email-input' fontSize='20px' m='1em auto 0 0'
        >Email:</FormLabel>

        <Input type='email' w='300px' id='email-input'
          onChange={(e) => setEmail(e.target.value)}
          required />
      </Flex>
      <Flex align='flex-start' direction='column'>
        <FormLabel htmlFor='email-input' fontSize='20px' m='2em auto 0 0'
        >Password:</FormLabel>

        <Input type='password' w='300px' id='password-input'
          onChange={(e) => setPassword(e.target.value)}
          required />
      </Flex>

      <Button variant='outline' w='100px' mt='3em'
        onClick={() => loginHandler(email, password)}>{title}</Button>
    </Flex>
  )
};

export default Form;
