import { auth, createUserWithEmailAndPassword } from '../../firebase';
import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { userLogin } from '../store/slices/userSlice';

import Form from '../Form';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [requestState, setRequestState] = useState('');

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
      .then(() => navigate('/'))
      .then(() => setRequestState('success'))
      .catch(() => setRequestState('error'));
  };

  return (
    <>
      <Form title='Sign up' loginHandler={registerToApp}
        requestState={requestState} />
    </>
  )
};

export default RegisterForm;