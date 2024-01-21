import { observable, makeObservable, action } from 'mobx';
import Swal from 'sweetalert2'
class servicesStore {
    service = {
        id: "",
        name: "",
        description: " ",
        price: '',
        duration: '',
    };
    servicesArry = [];
    isClickSave = false;
    isClickService = false;
   
    constructor() {
        makeObservable(this, {
            isClickSave: observable,
            service: observable,
            servicesArry: observable,
            isClickService: observable,
            addservice: action,
            getServices: action,
            setIsClickSave: action,
            setIsClickService: action,
            saveService: action,

        })
    }
    addservice = (value) => {
        this.servicesArry = [...this.servicesArry, { value }];
    }
    saveService = async (id, name, description, price, duration) => {
        console.log("save : Service");
        console.log(id, name, description, price, duration);
        const response = await fetch("http://localhost:8787/service", {
            method: "POST",
            body: JSON.stringify({
                id, name, description, price, duration
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(response.status)
        this.getServices()
        this.addservice(this.service)
        if (response.status === 200) {
            this.isClickSave = false;
           Swal.fire({
                title: "!מצויין",
                text: "השרות הוסף בהצלחה",
                icon: "success"
              })
        }
        else {
             Swal.fire({
                title: "!שגיאה ",
                text: "השרות קיים",
                icon: "error"
              })
        }


        this.setIsClickService(false);
    }
    setIsClickSave = (val) => { this.isClickSave = val }
    setIsClickService = (val) => { this.isClickService = val }
    getServices = async () => {
        console.log("getServies")
        const services = await fetch("http://localhost:8787/services");
        const data = await services.json();
        this.servicesArry = ([...data]);
    }

}

export default new servicesStore();