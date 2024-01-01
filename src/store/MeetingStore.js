import { observable, makeObservable, action } from 'mobx';
import Swal from 'sweetalert2'
class MeetingStore {
    count = 0;
    meeting = {
        id: "",
        serviceType: "",
        dateTime: "",
        clientName: "",
        clientPhone: "",
        clientEmail: "",
    }
    meetings = [];
    meetingResponse=true;
    isAddMetting = false;
    constructor() {
        makeObservable(this, {
            meetingResponse :observable,
            count: observable,
            meeting: observable,
            meetings: observable,
            isAddMetting: observable,
            saveMeeting: action,
            setAddMeeting: action,
            incCount: action,
            getMeeting: action,
            setMeetingRes:action,

        })
    }
    addMeeting = (value) => {
        this.meetings = [...this.meetings, { value }];
    }
    setAddMeeting = (val) => {
        this.isAddMetting = val;
    }
    incCount = () => { this.count += 1; }
    saveMeeting = async (id, serviceType, dateTime, clientName, clientPhone, clientEmail) => {
        console.log("enter save saveDetalise ")
        console.log(id, serviceType, dateTime, clientName, clientPhone, clientEmail)
        const response = await fetch("http://localhost:8787/appointment", {
            method: "POST",
            body: JSON.stringify({
                id, serviceType, dateTime, clientName, clientPhone, clientEmail
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
        this.meetings = response.json();
        this.getMeeting();
        console.log(response.status)
        if(response.status===200){
            this.meetingResponse=true;

            Swal.fire({
                title: "!מצויין",
                text: "הפגישה הוספה בהצלחה",
                icon: "success"
              })
        }
        else{
            this.meetingResponse=false; 
            Swal.fire({
                title: "!שגיאה",
                text: "התאריך תפוס כבר ,נסו שוב ",
                icon: "error"
              })
        }
    }

    getMeeting = async () => {
        console.log("getServies")
        const meet = await fetch("http://localhost:8787/appointments");
        const data = await meet.json();
        this.meetings = ([...data].sort((x,y)=>new Date(y.dateTime)-new Date(x.dateTime)));
        
    }
setMeetingRes=(val)=>{
this.meetingResponse=val;
}

}

export default new MeetingStore();