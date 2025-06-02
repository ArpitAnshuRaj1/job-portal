import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";  // ✅ import Hash Router here

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>   {/* use Router here */}
      <App />
    </HashRouter>
  </React.StrictMode>
);
