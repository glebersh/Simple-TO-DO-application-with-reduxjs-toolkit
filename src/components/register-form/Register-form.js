import { auth, createUserWithEmailAndPassword } from '../../firebase';
import React from 'react';

import { useDispatch } from 'react-redux';
import { userLogin } from '../store/slices/userSlice';

import Form from '../Form';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const registerToApp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          userLogin({
            userEmail: userAuth.user.email,
            userId: userAuth.user.uid,
            userAccessToken: userAuth.user.accessToken,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Form title='Sign up' loginHandler={registerToApp} />
    </>
  )
};

export default RegisterForm;