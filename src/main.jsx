import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout } from './components/Layout';
import { BrowserRouter } from 'react-router-dom';
import './style.css';

// import { router } from './routes';
// import { RouterProvider } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
   
    // <RouterProvider router={router} />
    <BrowserRouter>
        <Layout/>     
    </BrowserRouter>
  
); 
