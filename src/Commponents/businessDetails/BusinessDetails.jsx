import * as React from 'react';
// import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import MainStore from '../../store/MainStore';
import DetaliseEdit from '../detaliseEdit/DetaliseEdit';
import { observer } from 'mobx-react-lite';
import InputLabel from '@mui/material/InputLabel';
const BusinessDetails=(observer(()=> {
// const[det,setDet]=useState(MainStore.details)


  const saveDetails=()=>{
    <DetaliseEdit/>
  }
  return (
 <>
<div id="form" >
  {console.log(MainStore.details.toLocaleString)}
  {console.log("------------")}
<InputLabel id="outlined-basic"  >שם: </InputLabel>
    <br/>
    {/* <InputLabel id="outlined-basic" label="כתובת" variant="outlined" value={address} onChange={(e) => setAddress(e.target.value)}/>
    <br/>
    <InputLabel id="outlined-basic" label="טלפון" variant="outlined" value={phone} onChange={(e) => setPhone(e.target.value)}/>
    <br/>
    <InputLabel id="outlined-basic" label="בעל העסק" variant="outlined"value={owner} onChange={(e) => setOwner(e.target.value)}/>
    <br/>
    <InputLabel id="outlined-basic" label="לוגו" variant="outlined"value={logo} onChange={(e) => setLogo(e.target.value)}/>
    <br/>
    <InputLabel id="outlined-basic" label="תאור" variant="outlined"value={description} onChange={(e) => setDescription(e.target.value)}/>
    */}
     
            </div>
            <Button variant="contained"  onClick={saveDetails} disableElevation >
            עריכה 
            </Button>
      </>
  )
}))

export default BusinessDetails
