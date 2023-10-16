import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import your styles or CSS files.
import App from './App'; // Import your root component.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // The DOM element where the app should be rendered.
);
