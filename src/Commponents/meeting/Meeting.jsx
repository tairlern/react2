
import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { useState } from 'react';
// import MainStore from '../../store/MainStore';
import { observer } from 'mobx-react';
import MeetingStore from '../../store/MeetingStore';
import { useEffect } from 'react';



const Meeting=(observer(()=> {


useEffect(()=>{MeetingStore.getMeeting();},[]);
     return (
      <>
<div>enter to meeting</div>

{MeetingStore.meetings?.map((_, i) =>
                  <div key={i}>
                    {MeetingStore.meetings[i].serviceType}
                    <br/>
                    { MeetingStore.meetings[i].dateTime}
                    <br/>
                    { MeetingStore.meetings[i].clientName}
                    <br/>
                    { MeetingStore.meetings[i].clientPhone}
                    <br/>
                    { MeetingStore.meetings[i].clientEmail}
                    <br/>
                   
                  </div>)
          }
 </>
    )
  }))
  export default Meeting