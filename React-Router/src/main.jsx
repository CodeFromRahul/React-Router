import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Layout from './Layout.jsx'

const router = createBrowserRouter([
  {path:'/',
    element:<Layout.jsx/>,
    children:[{
      path:"",
      element:<Home/>
    },
  {
    path:"About",
    element:<About/>
  }]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
