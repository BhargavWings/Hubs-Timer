import React,{useState,useEffect} from "react";
//import "./timer.css"
import { LeaveRoomModal,LeaveReason } from "./LeaveRoomModal";


const Timer=({storingTime,setStoringTime})=>{
     const[generateModal,setGenerateModal]=useState(false)
     const [dialog, setDialog] = useState(null)
     const [time,setTime]=useState(storingTime)
    console.log(storingTime)
    
useEffect(()=>{
    setTimeout(() => {
        if(time>0){
        setTime(time-1)
        }
    },1000);
},[time])

useEffect(() => {
    if(time === 0) {
        setGenerateModal(true)
        showNonHistoriedDialog(LeaveRoomModal, {
            destinationUrl: "/",
            reason: LeaveReason.leaveRoom
          })
    }
},[time])


const closeDialog = () => {
   if (dialog) {
       setDialog(null)
      this.setState({ dialog: null });
    }
  };

 const showNonHistoriedDialog = (DialogClass, props = {}) => {
 console.log("RENDERED");
   setDialog(<DialogClass {...{ onClose: closeDialog, ...props }} />)
 };
return(
   <>
   <div className="timer">
   <p>Timer</p>
   <p>{time}</p>
   {
    generateModal ? <>{(!window.APP.hubChannel.canOrWillIfCreator("update_hub"))&& dialog}</> : null
   }
   </div>
   </>
)
}

export default Timer;