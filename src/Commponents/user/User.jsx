import * as React from 'react';
import BusinessDetails from '../businessDetails/BusinessDetails';
import ServiceArr from '../serviceArr/ServiceArr';
import Button from '@mui/material/Button';
// import { Observer } from 'mobx-react';
import { useState } from 'react';
// import Meeting from '../meeting/Meeting';
import AddMeeting from '../addMeeting/AddMeeting';
import { useEffect } from 'react';
import MainStore from '../../store/MainStore';
import '../admin/Admin.css'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';




function User() {
  useEffect(()=>{MainStore.getDetalise();},[])
  const [isOpens, SetIsOpens] = useState(false);
    return (
      <>


   <header className='heder'> <BusinessDetails /></header>
  
   <ServiceArr/>

  {/* <Button variant="contained"  disableElevation  >
                +
              </Button> */}
              <div className='bottun1'>
              <Fab color="primary"  aria-label="add" onClick={()=> {SetIsOpens(true)}}> 
        <AddIcon />
      </Fab>
              </div>
          
              {isOpens?
                     <AddMeeting setIsOpen={SetIsOpens}></AddMeeting>//נפתח רק בפעם הראשונה
                :<></>
            }

                      
      </>
    )
  }

  export default User