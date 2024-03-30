
let hours = document.querySelector('#hr');
let minutes = document.querySelector('#mn');
let seconds = document.querySelector('#sc');

let day, hour, min, sec;
updateTime();

setInterval(() => {
    updateTime();
}, 1000)

let digitalHours = document.querySelector('#hours');
let digitalMinutes = document.querySelector('#minutes');
let digitalSeconds = document.querySelector('#seconds');


function updateTime() {
    day = new Date();
    hh = day.getHours() * 30;
    mm = day.getMinutes() * 6;
    ss = day.getSeconds() * 6;
    
    hours.style.transform = `rotateZ(${hh + (mm/12)}deg)`;
    minutes.style.transform = `rotateZ(${mm}deg)`;
    seconds.style.transform = `rotateZ(${ss}deg)`;
}
