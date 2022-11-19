import React from 'react';

import { useDispatch } from 'react-redux';

import Form from '../Form';

import { auth, signInWithEmailAndPassword } from '../../firebase';
import { userLogin } from '../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginToApp = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          userLogin({
            userEmail: userAuth.user.email,
            userId: userAuth.user.uid,
            userAccessToken: userAuth.user.accessToken,
          })
        );
      })
      .then(() => navigate('/'))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Form title='Sign in' loginHandler={loginToApp} />
    </>
  )
};

export default LoginForm;