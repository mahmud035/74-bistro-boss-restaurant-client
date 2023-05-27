import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '@smastrom/react-rating/style.css';
import { HelmetProvider } from 'react-helmet-async';
import 'react-tabs/style/react-tabs.css';
import UserContext from './contexts/UserContext.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <UserContext>
          <App />
          <Toaster position="top-center" />
        </UserContext>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
