import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import MainStore from '../../store/MainStore';
import { observer } from 'mobx-react-lite';
import InputLabel from '@mui/material/InputLabel';
import DetaliseEdit from '../detaliseEdit/DetaliseEdit';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "../../App.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { useEffect } from 'react';
import CardMedia from '@mui/material/CardMedia';
import img1 from '../../assets/images/img1.jpg'
import '../admin/Admin.css'
const BusinessDetails=(observer(()=> {

   useEffect(() => {
      async function fetchData() {
        await MainStore.getDetalise();
        console.log("LEN", Object.keys(MainStore.details).length)
        if (Object.keys(MainStore.details).length === 0) {
         SetIsOpens(true);
        }
      }
      if(MainStore.isLogin){
      fetchData();}
      {isOpens?
         <DetaliseEdit setIsOpen={SetIsOpens}></DetaliseEdit>//נפתח רק בפעם הראשונה
         :<></>
     }
    }, []);
  
  const [isOpens, SetIsOpens] = useState(false);

  return (
 <>
     
<Card sx={{Width: '100%' }} className='CardHeader'>
      <CardContent>
      <CardMedia
          component="img"
          height="140"
          image={img1}
          src={img1}
         
        />
       
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           <InputLabel id="outlined-basic"  > שם : {MainStore.details.name}</InputLabel>
        </Typography>
      <br/>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         <InputLabel id="outlined-basic"  > כתובת : {MainStore.details.address}</InputLabel>
        </Typography>
        <br/>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <InputLabel id="outlined-basic"  >טלפון : {MainStore.details.phone}</InputLabel>
        </Typography>
        <br/>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         <InputLabel id="outlined-basic"  > בעל העסק : {MainStore.details.owner} </InputLabel>
        </Typography>
        <br/>
      
     
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           <InputLabel id="outlined-basic"  > תאור : {MainStore.details.description} </InputLabel>
        </Typography>
        <br/>
      
      </CardContent>
      <CardActions>
      
      </CardActions>
       {MainStore.isLogin&&<Button variant="contained" className='editD'  onClick={()=> {SetIsOpens(true)}}  >
            עריכה
            </Button> 
            }
    </Card>
          
            
               {isOpens?
                <DetaliseEdit setIsOpen={SetIsOpens}></DetaliseEdit>//נפתח רק בפעם הראשונה
                :<></>
            }
      </>
  )
}))

export default BusinessDetails
