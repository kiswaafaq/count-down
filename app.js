window.onload = () => {
    document.querySelector('#calculate').onClick = calculate ;
}

function calculate(){
    const date = document.querySelector("#date").onClick = date;
    const time = document.querySelector("#time").onClick = time;

    const endTime = new Date (date + "" +time);

    setInterval(() => calculateTime(endTime), 1000)

} 

function calculateTime(){
    const currentTime= new Date();

         const days= document.querySelector('#countdown-days');
         const hours= document.querySelector('#countdown-hours');
         const minutes= document.querySelector('#countdown-minutes');
         const seconds= document.querySelector('#countdown-seconds');

    if(endTime > currentTime){
        const timeLeft = (endTime-currentTime)/1000;
  
      days.innerText = Math.floor(timeLeft)/ (24*60*60);
      hours.innerText = Math.floor((timeLeft)/ (60*60)%24);
      minutes.innerText = Math.floor(timeLeft)/ (60 % 60);
      seconds.innerText = Math.floor(timeLeft) % (60);
    } else{
        days.innerText = 0;
      hours.innerText = 0;
      minutes.innerText = 0;
      seconds.innerText = 0;
}
}