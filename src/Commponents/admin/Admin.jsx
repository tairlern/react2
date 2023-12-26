import * as React from 'react';
import Button from '@mui/material/Button';
import MainStore from '../../store/MainStore';
import LogIn from '../logIn/LogIn'
// import Service from '../service/Service';
import ServicesStore from '../../store/ServicesStore';
import DetaliseEdit from '../detaliseEdit/DetaliseEdit';
import BusinessDetails from '../businessDetails/BusinessDetails';
function Admin() {

  return (
    <>
  {!MainStore.isLogin?<><LogIn/></>:<>
  {/* קומפוננטה של פרטי העסק +אפשרות עריכה  */}
  <DetaliseEdit></DetaliseEdit>
  {/* {MainStore.getDetalise} */}
{ <BusinessDetails/> }
{/* {MainStore.getDetalise?<><div>{MainStore.details}</div></>:<>blabla</>}/ */}
  <Button variant="contained" disableElevation  > פגישות </Button>
  <Button variant="contained"  onClick={ServicesStore.getServices }disableElevation  > שרותי העסק </Button>
    
    {/* קופסא שתתמלא בהתאם */}
    
    
    
    
    
    </>}
</> 
  )
}
 
export default Admin
