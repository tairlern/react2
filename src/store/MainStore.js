import { observable, makeObservable, action } from 'mobx';


class MainStore {
  count=50;
  firstLogin=true;
    isLogin = false;
    isClick=false;
    IsResponse=true;
    details={name:"",address:"",phone:"",owner:"",logo:"",description:""};
    constructor() {
        makeObservable(this, {
          count:observable,
            isLogin: observable, 
          isClick:observable,
            details:observable,
            IsResponse:observable,
            firstLogin:observable,
            setIsLogin: action,
            saveLogin:action,
            getDetalise:action,
            saveDetalise:action,
            setDetails:action,
            setIsClick:action,
            setResponse:action,
            setfirstLogin:action,
        })
    }
    incCount=()=>{this.count=this.count+1;}
    incCuntMeeting=()=>{this.countMeeting=this.countMeeting+1}
    setIsLogin = (val) => {
        this.isLogin = val;
    }
    setIsClick=(val)=>{this.isClick=val}
    saveLogin=async(name,password)=>{
        console.log("enter save Login")
        console.log(name,password)
        const response = await fetch("http://localhost:8787/login", {
            method: "POST",
            
            body: JSON.stringify({
              name, password
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          console.log(response.statusText)
          if (response.status === 200) {
            this.isLogin=true;
         this.IsResponse=true;
       }    
       else{
        this.isLogin=false;
        this.IsResponse=false;
       }   
   
}
saveDetalise=async(name,address,phone,owner,logo,description)=>{
  console.log("enter save saveDetalise ")
  console.log(name,address,phone,owner,logo,description)
  const response = await fetch("http://localhost:8787/businessData", {
      method: "POST",
      body: JSON.stringify({
        name,address,phone,owner,logo,description
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.getDetalise();
    console.log(this.getDetalise())
 }       

setDetails=(val)=>{this.details=val}

  getDetalise=async()=>{
    console.log("enter save detalis")
   const response = await fetch("http://localhost:8787/businessData");
   const data= await response.json();
   this.setDetails(data);
   }  

setResponse=(val)=>{this.IsResponse=val;}

setfirstLogin=(val)=>{this.firstLogin=val;}
}
export default new MainStore();