import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import User from './Commponents/user/User'
import Admin from './Commponents/admin/Admin'
import ServiceArr from './Commponents/serviceArr/ServiceArr'
import Meeting from './Commponents/meeting/Meeting'



const router = createBrowserRouter([
  {
    path: '/',
    element: <User/>,
    errorElement: <div>error contants</div>

  },
  {
    path: '/admin',
    element: <Admin />,
    errorElement: <div>error contants</div>,
    children: [
      {
        path: '',
        element: <div></div>,
      },
      {
        path: 'services',
        element: <ServiceArr/>,
        errorElement: <div>error contant not found</div>
      },
      {
        path: 'meeting',
        element: <Meeting/>,
        errorElement: <h3>Error!!!!!  the page meeting not found!!!!</h3>
        
      }
    ]
  }
],)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
