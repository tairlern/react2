import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {  observer } from "mobx-react"
import ServicesStore from '../../store/ServicesStore';
import MainStore from '../../store/MainStore';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import '../admin/Admin.css'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const Service = (observer((props) => {
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
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [duration, setDuration] = useState('')

  const saveService = () => {
    console.log("saveService");
    ServicesStore.saveService(MainStore.count, name, description, price, duration);
    ServicesStore.setIsClickSave(false);
    handleClose();
    MainStore.incCount();
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
            add new service!
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
              <TextField id="outlined-basic" label="שם:" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
              <TextField id="outlined-basic" label="תאור:" variant="outlined" value={description} onChange={(e) => setDescription(e.target.value)} />
              <TextField id="outlined-basic" label="מחיר" variant="outlined" value={price} onChange={(e) => setPrice(e.target.value)} />
              <TextField id="outlined-basic" label="משך הפגישה:" variant="outlined" value={duration} onChange={(e) => setDuration(e.target.value)} />
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" disableElevation onClick={saveService}  >
              שמירה
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </React.Fragment>
    </>
  )
}))

export default Service


