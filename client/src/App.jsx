import React from 'react'
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter } from 'react-router';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

