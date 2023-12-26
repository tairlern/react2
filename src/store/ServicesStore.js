import { key } from 'localforage';
import { observable, makeObservable, action } from 'mobx';

class servicesStore {
    services=[];
    constructor() {
        makeObservable(this, {
            services: observable,
            addservice:action,
            getServices:action,
        })
    }
    addservice=(value)=>{
        this.services=[...this.services,{value}];
    }
    getServices=async()=>{console.log("getServies")
        const services = await fetch("http://localhost:8787/services", {
        method: "Get",
      });
      {console.log(services)}
        // services.map((x,i)=>{<div key={i}>p</div>})
        // return services
    }
     
    
}

export default new servicesStore();