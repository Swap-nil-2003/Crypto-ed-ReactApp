import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, theme } from '@chakra-ui/react';
import ColorModeSwitcher from './ColourModeSwitcher';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher/> 
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

export const server=`https://api.coingecko.com/api/v3`;