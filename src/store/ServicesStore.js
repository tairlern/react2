import { observable, makeObservable, action } from 'mobx';

class servicesStore {
    service={  id: "",
    name: "",
    description: " ",
    price:'',
    duration: '',};
    servicesArry=[];
    isClickSave=false;
    isClickService=false;
    constructor() {
        makeObservable(this, {
            isClickSave:observable,
            service:observable,
            servicesArry: observable,
            isClickService:observable,
            addservice:action,
            getServices:action,
            setIsClickSave:action,
           setIsClickService:action,
            // setSer:action,
            saveService:action,
        })
    }
    addservice=(value)=>{
        this.servicesArry=[...this.servicesArry,{value}];
    }
    saveService=async(id,name,description,price,duration)=>{
        console.log("save : Service");
        console.log(id,name,description,price,duration);
        const response = await fetch("http://localhost:8787/service", {
            method: "POST",
            body: JSON.stringify({
                id,name,description,price,duration
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
         console.log(response.status)
         this.getServices()
         this.addservice(this.service)
         if(response.status==200){
            this.isClickSave=false;
         }
         this.setIsClickService(false);
    }
    // setSer=(val)=>{this.servicesArr=val}
    setIsClickSave=(val)=>{this.isClickSave=val}
    setIsClickService=(val)=>{this.isClickService=val}
    getServices=async()=>{console.log("getServies")
        const services = await fetch("http://localhost:8787/services");
      const data= await services.json();
      this.servicesArry=([...data]);
        // this.setSer(data);
    
    }
   
}

export default new servicesStore();