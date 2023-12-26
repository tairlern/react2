import { observable, makeObservable, action } from 'mobx';


class MainStore {
    isLogin = false;
    // isStatus=401;
    details=[];
    constructor() {
        makeObservable(this, {
            isLogin: observable, 
            // isStatus:observable,
            details:observable,
            setIsLogin: action,
            saveLogin:action,
            getDetalise:action,
            saveDetalise:action,
        })
    }
    setIsLogin = (val) => {
        this.isLogin = val;
    }
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
            // this.isStatus=200;
            // localStorage.setItem([isLog,"true"]);
              console.log(this.isLogin)
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
    // console.log(response.status)
    this.details=response;
 }       



  getDetalise=async()=>{
    console.log("enter save detalis")
    // console.log()
   const response = await fetch("http://localhost:8787/businessData");
   this.details= await response.json();
//    this.details=JSON.parse(data);
// console.log(this.details)

   }  


}
export default new MainStore();