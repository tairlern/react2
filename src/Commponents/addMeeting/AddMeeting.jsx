
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { observer } from "mobx-react"
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MeetingStore from '../../store/MeetingStore';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import dayjs from 'dayjs';
import ServicesStore from '../../store/ServicesStore';
import './AddMeeting.css'
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const AddMeeting = (observer((props) => {
  useEffect(() => {
    handleClickOpen();
  }, []);
  
  const [value, setValue] = useState(dayjs(new Date()));
  const [opens, setOpens] = useState(false);
   const [type, setType] = useState("");
  const [serviceType, setServiceType] = useState(ServicesStore.servicesArry);
  const [clientName, setClientName] = useState('');
  const [dateTime, setDateTime] =  useState(dayjs(new Date()));
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
 const[i,setI]=useState(0);
  const theme = useTheme();
const[valid,setValid]=useState('validd');
  const handleChangee = (newValue) => {
    setValue(newValue);
    setDateTime(newValue);
  };

  const handleClose = () => {
    props.setIsOpen(false)
    setOpens(false)
  }

  const handleClickOpen = () => {
    setOpens(true);
  };

 const saveMeeting =() => {
const f=dateTime.format('YYYY-MM-DDTHH:mm');

console.log(MeetingStore.count,type,f, clientName, clientPhone, clientEmail);
    MeetingStore.saveMeeting(MeetingStore.count, type, f, clientName, clientPhone, clientEmail)
      { handleClose();}
    
       MeetingStore.incCount();
  }
 

  return (
    <>

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

              <br />

              <FormControl sx={{ m: 1, width: 300 }}>

          
        <InputLabel id="demo-multiple-name-label">סוג פגישה </InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={serviceType}
        
          input={<OutlinedInput label="סוג" />}
          MenuProps={MenuProps}
           onChange={(e)=>{setType(e.target.value);setServiceType(e.target.value)
           }}
        >
          {ServicesStore.servicesArry?.map((_,index) => (
            <MenuItem
              key={i}
              value={ServicesStore.servicesArry[index].name}
              style={getStyles(index, serviceType, theme)}
            >
              {ServicesStore.servicesArry[index].name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    
    <br />
    <FormControl sx={{ m: 1, width: 300 }}    className={valid}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="תאריך"
                  value={dateTime}
                  onChange={()=>{handleChangee,setValid('validd')}} 
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              </FormControl>
              <br />
              <TextField id="outlined-basic" label="שם" variant="outlined" value={clientName} onChange={(e) => setClientName(e.target.value)} />
              <br />
              <TextField id="outlined-basic" label="טלפון" variant="outlined" value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} />
              <br />
              <TextField id="outlined-basic" label="מייל" variant="outlined" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} />
              <br />

           

            </Typography>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" disableElevation onClick={saveMeeting}  >
              שמירה
            </Button>

          </DialogActions>
        </BootstrapDialog>
      </React.Fragment>

  


      <br />

    </>


  )
}))


export default AddMeeting

