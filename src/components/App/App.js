import React from 'react';
import './App.css';
import { Box } from '@chakra-ui/react';
import ErrorBoundary from '../error-boundary/error-boundary';
import HomePage from '../HomePage';
import { Route, Routes, Navigate } from 'react-router-dom';
import RegisterPage from '../RegisterPage/RegisterPage';
import LoginPage from '../LoginPage/LoginPage';
import { useAuthentification } from '../hooks/useAuthentification';


const App = () => {

  // const { isAuthenticated, email } = useAuthentification();

  const PrivateRoute = ({ children }) => {
    const isAuthenticated = true;
    if (isAuthenticated) {
      return children;
    }
    return <Navigate to="/login" />
  };

  return (
    <ErrorBoundary>
      <Box className='app'>
        <Routes>
          <Route path='/' element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          } />
          <Route path='/registration' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </Box>
    </ErrorBoundary>
  )
};

export default App;