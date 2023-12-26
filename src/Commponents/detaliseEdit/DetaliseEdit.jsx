import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import MainStore from '../../store/MainStore';
import { observer } from 'mobx-react';
// import InputLabel from '@mui/material/InputLabel';
const DetaliseEdit=(observer(()=> {
// const [detalis,setDetalis]=useState(MainStore.getDetalise);
const [name,setName]=useState('');
const [address,setAddress]=useState('');
const [phone,setPhone]=useState('');
const [owner,setOwner]=useState('');
const [logo,setLogo]=useState('');
const [description,setDescription]=useState(' ');
 const saveDetails=()=>{
    MainStore.saveDetalise(name,address,phone,owner,logo,description)
 }
  return (
 <>

    <div id="form" >
{/* { לןגו } */}
    <TextField id="outlined-basic" label="שם העסק:" variant="outlined" value={name} onChange={(e) => setName(e.target.value)}  />
    <br/>
    <TextField id="outlined-basic" label="כתובת" variant="outlined" value={address} onChange={(e) => setAddress(e.target.value)}/>
    <br/>
    <TextField id="outlined-basic" label="טלפון" variant="outlined" value={phone} onChange={(e) => setPhone(e.target.value)}/>
    <br/>
    <TextField id="outlined-basic" label="בעל העסק" variant="outlined"value={owner} onChange={(e) => setOwner(e.target.value)}/>
    <br/>
    <TextField id="outlined-basic" label="לוגו" variant="outlined"value={logo} onChange={(e) => setLogo(e.target.value)}/>
    <br/>
    <TextField id="outlined-basic" label="תאור" variant="outlined"value={description} onChange={(e) => setDescription(e.target.value)}/>
    <br/>
      <Button variant="contained"  onClick={saveDetails} disableElevation >
            שמירה
            </Button>
            <br/>
    
            </div>
   
      </>
  )
}))

export default DetaliseEdit