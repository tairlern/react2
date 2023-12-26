import { observable, makeObservable, action } from 'mobx';

class MeetingStore {
    meetings=[];
    constructor() {
        makeObservable(this, {
            meetings: observable,
            addMeeting:action,
            
        })
    }
    addMeeting=(value)=>{
        this.meetings=[...this.meetings,{value}];
    }
}

export default new MeetingStore();