import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from '../Form';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addUser } from '../slices/usersSlice';
import { useNavigate } from 'react-router-dom';
import { Alert, AlertIcon } from '@chakra-ui/react';


const RegisterForm = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [isError, setErrorState] = useState(false);

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(addUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }))
        setErrorState(false);
      })
      .catch(() => setErrorState(true));
    navigate('/');
  };


  return (
    <>
      <Form title='Sign up'
        formHandler={handleRegister} />

      {isError ? <Alert status='error'>
        <AlertIcon />
        There was an error processing your request
      </Alert>
        :
        <Alert status='success'>
          <AlertIcon />
          You have successfully created an account
        </Alert>}
    </>
  )
};

export default RegisterForm;