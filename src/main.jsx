import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '@smastrom/react-rating/style.css';
import { HelmetProvider } from 'react-helmet-async';
import 'react-tabs/style/react-tabs.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
