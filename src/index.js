import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { AuthProvider } from './components/Contexts/AuthProvider';
import { GeneralProvider } from './components/Contexts/GeneralProvider';

import RootPage from './pages/RootPage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/HomePage/CatalogPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'login/',
        element: <LoginPage />
      },
      {
        path: 'register/',
        element: <RegisterPage />
      },
      {
        path: '',
        element: <HomePage />,
        children: [
          {
            path: '',
            element: <CatalogPage />
          }
        ]
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <GeneralProvider>
        <RouterProvider router={router} />
      </GeneralProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
