import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './normalize.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/header/Header';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Header />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

