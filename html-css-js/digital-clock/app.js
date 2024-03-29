
let hours = document.getElementById('hrs');
let minutes = document.getElementById('min');
let seconds = document.getElementById('sec');
let currentTime;

setInterval(() => {
    currentTime = new Date();
    hours.innerHTML = toTwoCharFormat(currentTime.getHours());
    minutes.innerHTML = toTwoCharFormat(currentTime.getMinutes());
    seconds.innerHTML = toTwoCharFormat(currentTime.getSeconds());
}, 1000);

function toTwoCharFormat(num) {
    return num.toString().length === 1? `0${num}` : num;
}
