const newYearDate = "1 Jan 2023";

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");



function countdown_timer(){
  const newYear= new Date(newYearDate);
  const currentDate = new Date();
  const totalSeconds = (newYear - currentDate) / 1000;
  const days = add_zero(Math.floor((totalSeconds / 3600)/24));
  const hours = add_zero(Math.floor((totalSeconds / 3600) % 24));
  const minutes = add_zero(Math.floor((totalSeconds / 60)%60));
  const seconds = add_zero(Math.floor((totalSeconds) % 60));

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;
  
  
}

function add_zero(time){
  return time < 10 ? (`0${time}`) : time;
}
countdown_timer();
setInterval(countdown_timer, 1000);