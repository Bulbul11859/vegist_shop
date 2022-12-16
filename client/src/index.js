import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProSidebarProvider } from 'react-pro-sidebar';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { StoreProvider } from './Store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoreProvider>
<ProSidebarProvider>

    <App />
    </ProSidebarProvider>
    </StoreProvider>
);
