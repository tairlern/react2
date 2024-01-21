import * as React from 'react';
import MainStore from '../../store/MainStore';
import LogIn from '../logIn/LogIn'
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import AdminPage from './AdminPage';


const Admin=observer(() => {
useEffect(()=>{MainStore.getDetalise();console.log(MainStore.firstLogin)},[])
  return (
    <> 


  {!MainStore.isLogin?<LogIn/> :<AdminPage/>}

</> 
  )
})
 
export default Admin
