const times = document.querySelector("#times");
const hours = document.querySelector("#hours");
const mins = document.querySelector("#mins");
const secs = document.querySelector("#secs");
const ampm = document.querySelector("#ampm");
const alarmBtn = document.querySelector("#alarmBtn");

let activeAlarm = false;
let getAlarm;
let currentTime;

// variable audio
let audio = new Audio("alarm.mp3");
audio.loop = true;

// Get time
const getTimes = () => {
  let now = new Date();

  currentTime = now.toLocaleTimeString();
  times.innerHTML = currentTime;
  if (getAlarm === currentTime) {
    console.log("acitve alarm");
    audio.play();
  }
  setTimeout(getTimes, 1000);
};

getTimes();

// Show option select to set time
const showOption = () => {
  let minsec = 60;
  let hour = 12;

  for (let i = 0; i < minsec; i++) {
    mins.appendChild(new Option(i < 10 ? "0" + i : i));
    secs.appendChild(new Option(i < 10 ? "0" + i : i));
  }
  for (let i = 0; i <= hour; i++) {
    hours.appendChild(new Option(i < 10 ? "0" + i : i));
  }
};

showOption();

// Set time
const setTimes = () => {
  if (activeAlarm) {
    alarmBtn.innerHTML = "Set Alarm";

    hours.disabled = false;
    mins.disabled = false;
    secs.disabled = false;
    ampm.disabled = false;

    hours.selectedIndex = 0;
    mins.selectedIndex = 0;
    secs.selectedIndex = 0;
    ampm.selectedIndex = 0;

    audio.pause();
    activeAlarm = false;
  } else {
    hours.disabled = true;
    mins.disabled = true;
    secs.disabled = true;
    ampm.disabled = true;

    getAlarm = `${hours.value < 10 ? hours.value % 10 : hours.value}:${
      mins.value
    }:${secs.value} ${ampm.value}`;
    alarmBtn.innerHTML = "Clear Alarm";

    activeAlarm = true;
  }
};

alarmBtn.onclick = setTimes;
