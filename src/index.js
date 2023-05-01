import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { AuthProvider } from './Contexts/AuthProvider';
import { GeneralProvider } from './Contexts/GeneralProvider';

import RootPage from './pages/RootPage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/HomePage/CatalogPage';
import AdminPage from './pages/AdminPanel';
import ManageCourses from './pages/AdminPanel/ManageCourses/ManageCourses';
import ManageCategories from './pages/AdminPanel/ManageCategories';
import ManageRolesPage from './pages/AdminPanel/ManageRoles';
import ManageAcademiesPage from './pages/AdminPanel/ManageAcademies';

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
            path: '/panel/',
            element: <AdminPage />,
            children: [
              {
                path: '',
                element: <ManageCourses />
              },
              {
                path: '/panel/categories',
                element: <ManageCategories />
              },
              {
                path: '/panel/roles',
                element: <ManageRolesPage />
              },
              {
                path: '/panel/academies',
                element: <ManageAcademiesPage />
              }
            ]
          },
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
