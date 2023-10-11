import React from 'react';
import { hydrate } from 'react-dom'; // Use hydrate from 'react-dom'
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');
hydrate( // Use hydrate instead of hydrateRoot
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  root
);

