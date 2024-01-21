import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { useEffect,useState } from 'react';
import ServicesStore from '../../store/ServicesStore';
import Button from '@mui/material/Button';
import MainStore from '../../store/MainStore';
import Service from '../service/Service';
import './ServiceArr.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const ServiceArr=(observer(()=> {
  const [isOpens, SetIsOpens] = useState(false);
  useEffect(()=>{ServicesStore.getServices();},[]);
  return (
 <>
 <div className='listMeetimg'>
 {ServicesStore.servicesArry?.map((_, i) =>
                    <div key={i}>
                      
<Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      שם  : { ServicesStore.servicesArry[i].name} 
        </Typography>
        
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        תאור : { ServicesStore.servicesArry[i].description}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       מחיר : { ServicesStore.servicesArry[i].price}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         משך הפגישה : { ServicesStore.servicesArry[i].duration}
        </Typography>
       
      </CardContent>
      <CardActions>
      
      </CardActions>
    </Card>     
                     
                    </div>)}
     </div>
                 {MainStore.isLogin&& <Button variant="contained" className='addSer' disableElevation onClick={()=> {SetIsOpens(true)}}  >
                       להוספת שרות
                     </Button>} 

                     {isOpens?
                     <Service setIsOpen={SetIsOpens}></Service>//נפתח רק בפעם הראשונה
                :<></>
            }
                      

                


      </>
  )
}))

export default ServiceArr

/**import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
} */