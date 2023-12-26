import * as React from 'react';
import { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import FormControl from '@mui/material/FormControl';
// import Button from '@mui/material/Button';
// import MainStore from '../../store/MainStore';
import { observer } from "mobx-react"
import ServicesStore from '../../store/ServicesStore';


const Service=(observer(()=> {
  // const[editServices,setEditServices]=useState(false);
  // const [type, setType] = useState('')
  // const [description, setDescription] = useState('')
  // const[serv,setServ]=useState(ServicesStore.getServices)
  return (
    <>
    {/* {ServicesStore.getServices.map((_,i)=><div>g</div>)} */}
       {/* {editServices? <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" >    
             <TextField id="outlined-basic" label="Type of Service:" variant="outlined"  value={type} onChange={(e) => setType(e.target.value)} />
             <TextField id="outlined-basic" label="Description:" variant="outlined"  value={description} onChange={(e) => setDescription(e.target.value)} />
          <Button variant="contained" disableElevation  onClick={handleLogin}>
            אישור
            </Button>
        </FormControl>
       :ServicesStore.printServices()}

{MainStore.isLogin && <button onClick={() => setEditServices(!editServices)}>edit Service</button>} */}
<div>services</div>
    </>
  )
}))

export default Service