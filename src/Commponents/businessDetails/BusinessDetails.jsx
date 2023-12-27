import * as React from 'react';
// import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import MainStore from '../../store/MainStore';
// import DetaliseEdit from '../detaliseEdit/DetaliseEdit';
import { observer } from 'mobx-react-lite';
import InputLabel from '@mui/material/InputLabel';


// import * as React from 'react';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import DetaliseEdit from '../detaliseEdit/DetaliseEdit';
// import { styled } from '@mui/material/styles';






const BusinessDetails=(observer(()=> {
  const [isOpen, SetIsOpen] = useState(false);
// const[det,setDet]=useState(MainStore.details)

  // const saveDetails=()=>{
   
  // }
  return (
 <>
  <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
      <InputLabel id="outlined-basic"  >שם:{MainStore.details.name} </InputLabel>
    {/* <br/> */}
    <InputLabel id="outlined-basic"  >כתובת:{MainStore.details.address} </InputLabel>
    {/* <br/> */}
    <InputLabel id="outlined-basic"  >טלפון:{MainStore.details.phone} </InputLabel>
    {/* <br/> */}
    <InputLabel id="outlined-basic"  >בעל העסק:{MainStore.details.owner} </InputLabel>
    {/* <br/> */}
    <InputLabel id="outlined-basic"  >לוגו:{MainStore.details.logo} </InputLabel>
    {/* <br/> */}
    <InputLabel id="outlined-basic"  >תאור:{MainStore.details.description} </InputLabel>
      </Stack>
    </Box>
    
    {MainStore.isLogin&&<Button variant="contained"  onClick={()=> MainStore.setIsClick(true)}  >
            עריכה
            </Button> }  
               {isOpen?
                <DetaliseEdit setIsOpen={SetIsOpen}></DetaliseEdit>//נפתח רק בפעם הראשונה
                :<></>
            }
      </>
  )
}))

export default BusinessDetails
