const timerContainer=document.querySelector(".timer span")
let time=59;
setInterval(()=>{
    time=time-1;
    timerContainer.innerHTML=`00:00:${time}s`
    if (time===0) {
        time=60
        
    }
},1000)