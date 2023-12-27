import * as React from 'react';

import { observer } from 'mobx-react-lite';
import { useEffect,useState } from 'react';
import ServicesStore from '../../store/ServicesStore';

import Button from '@mui/material/Button';
import MainStore from '../../store/MainStore';
import Service from '../service/Service';





const ServiceArr=(observer(()=> {

  const [isOpens, SetIsOpens] = useState(false);

  useEffect(()=>{ServicesStore.getServices();},[]);
  return (
 <>
 {ServicesStore.servicesArry?.map((_, i) =>
                    <div key={i}>
                      { ServicesStore.servicesArry[i].name}
                      <br/>
                      { ServicesStore.servicesArry[i].description}
                      <br/>
                      { ServicesStore.servicesArry[i].price}
                      <br/>
                      { ServicesStore.servicesArry[i].duration}
                      <br/>
                     
                      <br/>
                     
                    </div>)}
                    {MainStore.isLogin&& <Button variant="contained" disableElevation onClick={()=> {SetIsOpens(true)}}  >
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