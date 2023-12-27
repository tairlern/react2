import { observable, makeObservable, action } from 'mobx';

class MeetingStore {
    count=0;
    meeting={   id: "",
    serviceType: "",
    dateTime: "",
    clientName:  "",
    clientPhone:"",
    clientEmail: "",}
    meetings=[];
    isAddMetting=false;
    constructor() {
        makeObservable(this, {
            count:observable,
            meeting:observable,
            meetings: observable,
            isAddMetting: observable,
            saveDetailsAddMeeting:action,
            setAddMeeting:action,
            incCount:action,
            getMeeting:action,
        })
    }
    addMeeting=(value)=>{
        this.meetings=[...this.meetings,{value}];
    }
    setAddMeeting = (val) => {
        this.isAddMetting = val;
    }
incCount=()=>{this.count+=1;}
    saveDetailsAddMeeting=async(id, MserviceType,dateTime,clientName,clientPhone,clientEmail)=>{
        console.log("enter save saveDetalise ")
        console.log(id, MserviceType,dateTime,clientName,clientPhone,clientEmail)
        const response = await fetch("http://localhost:8787/appointment", {
            method: "POST",
            body: JSON.stringify({
                id, MserviceType,dateTime,clientName,clientPhone,clientEmail
            }),
            headers: {
              "Content-Type": "application/json",
            },
          })
          this.meetings=response.json();
       }

       getMeeting=async()=>{console.log("getServies")
       const meet = await fetch("http://localhost:8787/appointments");
     const data= await meet.json();
     this.meetings=([...data]);
   
   
   }
}

export default new MeetingStore();