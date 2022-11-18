import React, { useState } from 'react';
import './App.css';
import { Box } from '@chakra-ui/react';
import ErrorBoundary from '../error-boundary/error-boundary';
import HomePage from '../HomePage';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from '../RegisterPage/RegisterPage';
import LoginPage from '../LoginPage/LoginPage';


const App = () => {
  return (
    <ErrorBoundary>
      <Box className='app'>
        <Routes>
          <Route path='/' element={
            <HomePage />} />
          <Route path='/registration' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </Box>
    </ErrorBoundary>
  )
};

export default App;