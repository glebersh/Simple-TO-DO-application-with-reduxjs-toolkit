import React from 'react';
import './App.css';
import { Box } from '@chakra-ui/react';
import ErrorBoundary from '../error-boundary/error-boundary';
import HomePage from '../HomePage';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from '../RegisterPage/RegisterPage';
import LoginPage from '../LoginPage/LoginPage';
import { ProSidebarProvider } from 'react-pro-sidebar';

const App = () => {

  return (
    <ErrorBoundary>
      <ProSidebarProvider>
        <Box className='app'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/registration' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </Box>
      </ProSidebarProvider>
    </ErrorBoundary >
  )
};

export default App;