import React from 'react'
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter } from 'react-router';

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

