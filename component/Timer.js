import React , {useState} from "react";

const Timer=()=>{
    const [hours,setHours]=useState(00);
    const [minutes,setMinutes]=useState(02);
    const [seconds,setSeconds]=useState(00);
    return (
        <>
            <h2>This is Timer of 2 minutes </h2>
            <h2>{hours} : {minutes} : {seconds}</h2>
        </>
    )
}

export default Timer;