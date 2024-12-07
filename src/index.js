import React from 'react';
import { createRoot } from 'react-dom/client';
import "../node_modules/bootstrap/scss/bootstrap.scss";
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

