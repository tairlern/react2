import * as React from 'react';
import BusinessDetails from '../businessDetails/BusinessDetails';
import { Link, Outlet } from "react-router-dom";
import Button from '@mui/material/Button';
// import { SmartDisplay } from '@mui/icons-material';
import './Admin.css'
function AdminPage()  {
   
    
      return (
        <> 
    
      <header className='heder'> <BusinessDetails/> </header>
    <div className='boton2'>
      <Button variant="outlined"> <Link to="./services" > services </Link></Button>
      <Button variant="outlined"><Link to="./meeting"> meeting </Link>   </Button>
         
    
    </div> 
    <Outlet/>
    </> 
      )
    }
     
    export default AdminPage
   