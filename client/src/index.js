import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Use REACT_APP_BASENAME for basename configuration
const basename = process.env.REACT_APP_BASENAME || '/';

console.log("Environment:", process.env.NODE_ENV);
console.log("Basename:", basename);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
