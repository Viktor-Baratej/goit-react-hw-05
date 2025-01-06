import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom'; // Імпортуйте BrowserRouter
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {' '}
      {/* Важливо обгорнути ваш додаток */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
