import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './dynamic-styles.css';

import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
//document.body.style.backgroundColor = backgroundColor;

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
