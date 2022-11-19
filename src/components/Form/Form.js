import { Button, Input, Flex, FormLabel } from '@chakra-ui/react';
import React, { useState } from 'react';
import './Form.css';

const Form = ({ title, formHandler }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Flex direction='column' align='center'>
      <FormLabel htmlFor='email-input' fontSize='20px' m='1em auto 0 0'
      >Email:</FormLabel>

      <Input type='email' w='300px' id='email-input'
        onChange={(e) => setEmail(e.target.value)}
        required />
      <FormLabel htmlFor='email-input' fontSize='20px' m='2em auto 0 0'
      >Password:</FormLabel>

      <Input type='password' w='300px' id='password-input'
        onChange={(e) => setPassword(e.target.value)}
        required />


      <Button variant='outline' w='100px' mt='3em'
        onClick={() => formHandler(email, password)}>{title}</Button>
    </Flex>
  )
};

export default Form;
