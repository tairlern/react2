import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import MainStore from '../../store/MainStore';
import { observer } from 'mobx-react-lite';
import InputLabel from '@mui/material/InputLabel';
import DetaliseEdit from '../detaliseEdit/DetaliseEdit';
// import styled from '@mui/system/styled';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "../../App.css"
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';


const BusinessDetails=(observer(()=> {

  const [isOpens, SetIsOpens] = useState(false);

  return (
 <>
     
<Card sx={{Width: '100%' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           <InputLabel id="outlined-basic"  >:שם{MainStore.details.name} </InputLabel>
        </Typography>
      
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         <InputLabel id="outlined-basic"  >:כתובת{MainStore.details.address} </InputLabel>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <InputLabel id="outlined-basic"  >:טלפון{MainStore.details.phone} </InputLabel>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         <InputLabel id="outlined-basic"  >:בעל העסק{MainStore.details.owner} </InputLabel>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         
     <InputLabel id="outlined-basic"  >:לוגו{MainStore.details.logo} </InputLabel>
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           <InputLabel id="outlined-basic"  >:תאור{MainStore.details.description} </InputLabel>
        </Typography>
      </CardContent>
      <CardActions>
      
      </CardActions>
    </Card>
          
           {MainStore.isLogin&&<Button variant="contained"  onClick={()=> {SetIsOpens(true)}}  >
            עריכה
            </Button> 
            }  
               {isOpens?
                <DetaliseEdit setIsOpen={SetIsOpens}></DetaliseEdit>//נפתח רק בפעם הראשונה
                :<></>
            }
      </>
  )
}))

export default BusinessDetails
