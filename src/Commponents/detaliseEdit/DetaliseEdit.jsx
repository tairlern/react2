import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import MainStore from '../../store/MainStore';
import { observer } from 'mobx-react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const DetaliseEdit = (observer((props) => {
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
  const [name, setName] = useState(MainStore.details.name);
  const [address, setAddress] = useState(MainStore.details.address);
  const [phone, setPhone] = useState(MainStore.details.phone);
  const [owner, setOwner] = useState(MainStore.details.owner);
  const [logo, setLogo] = useState(MainStore.details.logo);
  const [description, setDescription] = useState(MainStore.details.description);
  const saveDetails = () => {
    MainStore.saveDetalise(name, address, phone, owner, logo, description)
    MainStore.setIsClick(false);
    handleClose();
    {MainStore.setfirstLogin(false)}
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
         פרטי העסק
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
              <TextField id="outlined-basic" label=" :שם העסק" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
              <TextField id="outlined-basic" label=" :כתובת" variant="outlined" value={address} onChange={(e) => setAddress(e.target.value)} />
              <TextField id="outlined-basic" label=" :טלפון" variant="outlined" value={phone} onChange={(e) => setPhone(e.target.value)} />

              <TextField id="outlined-basic" label=" :בעל העסק" variant="outlined" value={owner} onChange={(e) => setOwner(e.target.value)} />


              <TextField id="outlined-basic" label=" :תאור" variant="outlined" value={description} onChange={(e) => setDescription(e.target.value)} />


            </Typography>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={saveDetails} disableElevation >
              שמירה
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </React.Fragment>

    </>
  )
}))
export default DetaliseEdit




