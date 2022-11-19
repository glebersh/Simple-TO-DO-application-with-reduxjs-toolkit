import React, { useState } from 'react';
import Form from '../Form';
import { addUser } from '../slices/usersSlice';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Alert, AlertIcon } from '@chakra-ui/react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const LoginForm = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [isError, setErrorState] = useState('');


  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(addUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }))
        setErrorState('correct');
      })
      .catch(() => setErrorState('error'));
    navigate('/');
  };

  return (
    <>
      <Form title='Sign in' formHandler={handleLogin} />
      {isError === 'error' ? <Alert status='error'>
        <AlertIcon />
        There was an error processing your request
      </Alert> : null}

      {isError === 'correct' ?
        <Alert status='success'>
          <AlertIcon />
          You have successfully logged in to your account
        </Alert> : null}
    </>
  )
};

export default LoginForm;