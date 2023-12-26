import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import User from './Commponents/user/User'
import Admin from './Commponents/admin/Admin'

const router = createBrowserRouter([
  {
    path: '/',
    element: <User />,
    errorElement: <div>error contants</div>

  },
  {
    path: '/admin',
    element: <Admin />,
    errorElement: <div>error contants</div>,
    // children: [
    //   {
    //     path: '',
    //     element: <div>empty</div>,
    //   },
    //   {
    //     path: 'service',
    //     element: <div>services</div>,
    //     errorElement: <div>error contant not found</div>
    //   },
    //   {
    //     path: 'meeting',
    //     element: <div>meeting</div>,
    //     errorElement: <div>error contant not found</div>
    //   }
    // ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App/> */}
       <RouterProvider router={router} />
  </React.StrictMode>,
)
