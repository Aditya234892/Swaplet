import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Pages/Home';
import LoginAndRegister from './Components/Pages/LoginAndRegister';
import NotFound from './Components/NotFound';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home />
        },
      ]
    },
    {
      path: "/LoginAndRegister",
      element: <LoginAndRegister />
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
