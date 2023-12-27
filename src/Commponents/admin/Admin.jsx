import * as React from 'react';
import MainStore from '../../store/MainStore';
import LogIn from '../logIn/LogIn'
import DetaliseEdit from '../detaliseEdit/DetaliseEdit';
import BusinessDetails from '../businessDetails/BusinessDetails';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import ServicesStore from '../../store/ServicesStore';


import { Link, Outlet } from "react-router-dom";
import ServiceArr from '../serviceArr/ServiceArr';
import Service from '../service/Service';
const Admin=observer(() => {
useEffect(()=>{MainStore.getDetalise();},[])

  return (
    <> 
  {!MainStore.isLogin&&<> <LogIn/> </>}
  {MainStore.isLogin&&MainStore.isClick&&<DetaliseEdit/>} 
  { MainStore.isLogin&&ServicesStore.isClick&&<ServiceArr/>}
  {MainStore.isLogin&&ServicesStore.isClickService&&<Service/>} 

  {MainStore.isLogin&&!MainStore.isClick&&<>

  <BusinessDetails/> 
 <br/>
 
    <Link to="./services" > services </Link>
|
<Link to="./meeting"> meeting </Link>   </>}
   
<Outlet/>

</> 
  )
})
 
export default Admin
