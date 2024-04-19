
let digitalHours = document.getElementById("digitalHour");
let digitalMinutes = document.getElementById("digitalMinute");
let digitalSeconds = document.getElementById("digitalSecond");
let digitalAmPm = document.getElementById("digitalAmPm");

let digitalDays = document.getElementById("digitalDay");
let digitalNumberDays = document.getElementById("digitalNumberDay");
let digitalMonths = document.getElementById("digitalMonth");
let digitalYears = document.getElementById("digitalYear");

const formatSwitchBtn =  document.querySelector(".format-switch-btn");
const dotMenuBtn = document.querySelector(".dot-menu-btn");
const dotMenu = document.querySelector(".dot-menu");

let now;
let ampmFormat = true;

clock();

dotMenuBtn.addEventListener("click", () => {
    dotMenu.classList.toggle("active");
});

formatSwitchBtn.addEventListener("click", () => {
    formatSwitchBtn.classList.toggle("active");
    ampmFormat =!ampmFormat;
    updateTime(ampmFormat);
});

function clock() {
    updateTime(ampmFormat);
    setTimeout(clock, 1000);
}

function updateTime(ampmFormat) {

    now = new Date();

    if (ampmFormat) {
        digitalHours.innerHTML = toTwoCharFormat(to12HourFormat(now.getHours()));
        digitalAmPm.classList.remove("hide");
    } else {
        digitalHours.innerHTML = toTwoCharFormat(now.getHours());
        digitalAmPm.classList.add("hide");
    }

    digitalMinutes.innerHTML = toTwoCharFormat(now.getMinutes());
    digitalSeconds.innerHTML = toTwoCharFormat(now.getSeconds());
    digitalAmPm.innerHTML = now.getHours() >= 12? "PM" : "AM";
    digitalDays.innerHTML = dayNumberToStringNameFormat(now.getDay());
    digitalNumberDays.innerHTML = now.getDate();
    digitalMonths.innerHTML = monthNumberToStringNameFormat(now.getMonth() + 1);
    digitalYears.innerHTML = now.getFullYear();

}

function toTwoCharFormat(num) {
    return num.toString().length === 1? `0${num}` : num;
}

function to12HourFormat(hours) {
    return hours > 12 ? hours - 12 : hours;
}

function monthNumberToStringNameFormat(month) {
    switch (month) {
        case 1:
            return "January";
        case 2:
            return "February";
        case 3:
            return "March";
        case 4:
            return "April";
        case 5:
            return "May";
        case 6:
            return "June";
        case 7:
            return "July";
        case 8:
            return "August";
        case 9:
            return "September";
        case 10:
            return "October";
        case 11:
            return "November";
        case 12:
            return "December";
        default:
            return "Unknown";
    }
}

function dayNumberToStringNameFormat(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Unknown";
    }
}
