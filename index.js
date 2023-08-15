const timerContainer=document.querySelector(".timer span")
let time=60;
setInterval(()=>{
    time=time-1;
    timerContainer.innerHTML=`00:00:${time}s`
},1000)