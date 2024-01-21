
import * as React from 'react';
import { observer } from 'mobx-react';
import MeetingStore from '../../store/MeetingStore';
import { useEffect } from 'react';
import './Meeting.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
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


const Meeting=(observer(()=> {


useEffect(()=>{console.log(MeetingStore.meetings); MeetingStore.getMeeting();},[]);


const validDate = (dateTime) => {
  const today = new Date();
  const meetingDate = new Date(dateTime);

  const timeDiff = Math.abs(meetingDate.getTime()-today.getTime())
  const diffDays = Math.ceil(timeDiff / (1000 * 60*60*24));
 if(  diffDays<0) 
  return 'non'
else
  if (diffDays===1) {
    return 'red';
  } else if (diffDays <= 7) {
    return 'orange'; //השבוע
  } 
  else if (diffDays >=7) 
  {
    return 'green'; // עתיד
  
  }

};
     return (
      <>
<h5>רשימת פגישות</h5>
<body className='listMeetimg'>
  

{MeetingStore.meetings.map((_, i) =>
                  <div key={i}>


<Card sx={{ minWidth: 275 }} >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         {MeetingStore.meetings[i].serviceType}
        </Typography>
     
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          { MeetingStore.meetings[i].clientName}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         { MeetingStore.meetings[i].clientPhone}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          { MeetingStore.meetings[i].clientEmail}
        </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <div  className={validDate( MeetingStore.meetings[i].dateTime)}> {MeetingStore.meetings[i].dateTime}</div>
        </Typography>
      </CardContent>
    </Card>

                   
                  </div>)
          }
          </body>
 </>
    )
  }))
  export default Meeting

