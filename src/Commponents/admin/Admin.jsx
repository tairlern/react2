import * as React from 'react';
import MainStore from '../../store/MainStore';
import LogIn from '../logIn/LogIn'
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import AdminPage from './AdminPage';
import DetaliseEdit from '../detaliseEdit/DetaliseEdit';


const Admin=observer(() => {
useEffect(()=>{MainStore.getDetalise();},[])

  return (
    <> 
{MainStore.firstLogin&&<><DetaliseEdit/>
{MainStore.setfirstLogin(false)}
</>
}
  {!MainStore.isLogin?<LogIn/> :<AdminPage/>}

</> 
  )
})
 
export default Admin
