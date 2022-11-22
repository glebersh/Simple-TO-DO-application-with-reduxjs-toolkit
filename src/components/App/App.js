import React, { useEffect, useState } from 'react';

import { Box } from '@chakra-ui/react';
import ErrorBoundary from '../error-boundary/error-boundary';
import HomePage from '../HomePage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';

import { Route, Routes } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';


import './App.css';

const App = () => {

  return (
    <ErrorBoundary>
      <ProSidebarProvider>
        <Box className='app'>
          <Routes>
            <Route path='TO-DO-application/' element={
              <HomePage />} />
            <Route path='TO-DO-application/registration' element={<RegisterPage />} />
            <Route path='TO-DO-application/login' element={<LoginPage />} />
          </Routes>
        </Box>
      </ProSidebarProvider>
    </ErrorBoundary >
  )
};
export default App;