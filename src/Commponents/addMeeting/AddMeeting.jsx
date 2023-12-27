
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import MainStore from '../../store/MainStore';
import MeetingStore from '../../store/MeetingStore';
import { observer } from "mobx-react"
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
// import Stack from '@mui/joy/Stack';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import ServicesStore from '../../store/ServicesStore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


  const AddMeeting=(observer((props)=> {
    useEffect(() => {
      handleClickOpen();
    }, []);

    const [opens, setOpens] = useState(false);
    const handleClose = () => {
      props.setIsOpen(false)
      setOpens(false)
      
    }
  
    const handleClickOpen = () => {
      setOpens(true);
    };
    const[serviceType,setServiceType]=useState("");
    const [clientName,setClientName]=useState('');
    const [dateTime,setDateTime]=useState('');
    const [clientPhone,setClientPhone]=useState('');
    const [clientEmail,setClientEmail]=useState('');
     const saveMeeting=()=>{
      
        MainStore.saveDetaliseAddMeeting(MeetingStore.count, MeetingStore.meeting.serviceType,dateTime,clientName,clientPhone,clientEmail)
        handleClose();
        MeetingStore.incCount();
     }

     return (
      <>
   meeting
   <React.Fragment>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={opens}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            add new meeting!
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
          </IconButton>
          <DialogContent dividers>

            <Typography gutterBottom>
              {/* <Stack spacing={2}> */}
              <TextField id="outlined-basic" label="שם" variant="outlined" value={clientName} onChange={(e) => setClientName(e.target.value)}  />
    <br/>
    {ServicesStore.servicesArry.map((_,i)=>{
      <div key={i}>
        <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label={ServicesStore.servicesArry[i].serviceType} value={serviceType} onChange={ setServiceType(ServicesStore.servicesArry[i].serviceType)}/>
      </FormGroup>
      </div>
    })}
    <TextField id="outlined-basic" label="תאריך" variant="outlined" value={dateTime} onChange={(e) => setDateTime(e.target.value)}/>
    <br/>
    <TextField id="outlined-basic" label="טלפון" variant="outlined" value={clientPhone} onChange={(e) => setClientPhone(e.target.value)}/>
    <br/>
    <TextField id="outlined-basic" label="מייל" variant="outlined"value={clientEmail} onChange={(e) => setClientEmail(e.target.value)}/>
    <br/>

              {/* </Stack> */}

            </Typography>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" disableElevation onClick={saveMeeting}  >
              שמירה
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </React.Fragment>




   

      <Button variant="contained"  onClick={saveMeeting} disableElevation >
           שליחה
            </Button>
            <br/>
  
 </>
      
    
    )
  }))
  
  
  export default AddMeeting

  