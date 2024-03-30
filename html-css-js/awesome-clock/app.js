
let hours = document.querySelector('#hr');
let minutes = document.querySelector('#mn');
let seconds = document.querySelector('#sc');

let digitalHours = document.getElementById('hours');
let digitalMinutes = document.getElementById('minutes');
let digitalSeconds = document.getElementById('seconds');
let digitalAmPm = document.getElementById('ampm');

let day, hour, min, sec;
updateTime();

setInterval(() => {
    updateTime();
}, 1000)



function updateTime() {
    day = new Date();
    hh = day.getHours() * 30;
    mm = day.getMinutes() * 6;
    ss = day.getSeconds() * 6;
    
    hours.style.transform = `rotateZ(${hh + (mm/12)}deg)`;
    minutes.style.transform = `rotateZ(${mm}deg)`;
    seconds.style.transform = `rotateZ(${ss}deg)`;

    digitalHours.innerHTML = toTwoCharFormat(day.getHours());
    digitalMinutes.innerHTML = toTwoCharFormat(day.getMinutes());
    digitalSeconds.innerHTML = toTwoCharFormat(day.getSeconds());
    digitalAmPm.innerHTML = day.getHours() >= 12? 'PM' : 'AM';

}

function toTwoCharFormat(num) {
    return num < 10? `0${num}` : num;
}
