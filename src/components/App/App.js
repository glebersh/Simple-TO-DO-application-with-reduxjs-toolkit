import React, { useEffect, useState } from 'react';

import { Box } from '@chakra-ui/react';
import ErrorBoundary from '../error-boundary/error-boundary';
import HomePage from '../HomePage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';

import { Route, Routes, useNavigate } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';

import { selectUser } from '../store/slices/userSlice';

import './App.css';
import { useSelector } from 'react-redux';

const App = () => {

  return (
    <ErrorBoundary>
      <ProSidebarProvider>
        <Box className='app'>
          <Routes>
            <Route path='/' element={
              <HomePage />} />
            <Route path='/registration' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </Box>
      </ProSidebarProvider>
    </ErrorBoundary >
  )
};
export default App;