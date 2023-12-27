import * as React from 'react';
import BusinessDetails from '../businessDetails/BusinessDetails';
import ServiceArr from '../serviceArr/ServiceArr';
import Button from '@mui/material/Button';
// import { Observer } from 'mobx-react';
import { useState } from 'react';
// import Meeting from '../meeting/Meeting';
import AddMeeting from '../addMeeting/AddMeeting';


function User() {
  const [isOpens, SetIsOpens] = useState(false);

    return (
      <>
  <BusinessDetails/>
  <ServiceArr/>
  <Button variant="contained" disableElevation onClick={()=> {SetIsOpens(true)}} >
                קבע פגישה
              </Button>
              {isOpens?
                     <AddMeeting setIsOpen={SetIsOpens}></AddMeeting>//נפתח רק בפעם הראשונה
                :<></>
            }
      </>
    )
  }

  export default User