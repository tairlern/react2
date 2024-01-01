import * as React from 'react';
import { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import './LogIn.css'
import MainStore from '../../store/MainStore';
import Admin from '../admin/Admin';
import { observer } from 'mobx-react-lite';
import Alert from '@mui/material/Alert';

const LogIn = (observer(() => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {//שליחת הנתונים
    MainStore.saveLogin(name, password);
    setName("")
    setPassword("")
  }
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }
  return (
    <>
      {!MainStore.isLogin ? <>
        <div className='boxLogin'>
          <Box

            component="form"
            sx={{
              '& .MuiTextField-root': { alignItems: 'center', justifyContent: 'center', m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <InputLabel id="testOpen"> :הכנס שם וסיסמא  </InputLabel>
            <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(e) => {setName(e.target.value);MainStore.setResponse(true)}} />
            <br />
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" >
              <InputLabel htmlFor="outlined-adornment-password"  >Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={password} onChange={(e) => {setPassword(e.target.value);MainStore.setResponse(true)}}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              <Button variant="contained" disableElevation onClick={handleLogin} >
                אישור
              </Button>
            </FormControl>
            <br />


          </Box>
        </div>
      </>
        : <>
          <Admin />

        </>}
     {!MainStore.IsResponse&&   <Alert  severity="error">Error! One of the data is incorrect</Alert>}


    </>

  )

}))
export default LogIn
