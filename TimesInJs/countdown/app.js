// Get date time now
const getTime = () => {
  const day = document.querySelector("#day");
  const month = document.querySelector("#month");
  const year = document.querySelector("#year");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let date = new Date();

  day.innerHTML = date.getDate();
  month.innerHTML = months[date.getMonth()];
  year.innerHTML = date.getFullYear();
};

getTime();

// Countdown function
const countDown = () => {
  const days = document.querySelector("#days");
  const hours = document.querySelector("#hours");
  const mins = document.querySelector("#mins");
  const secs = document.querySelector("#secs");

  let now = new Date().getTime();
  let newYear = new Date("Jan 1, 2022").getTime();

  let totalSecond = newYear - now;

  days.innerHTML = Math.floor(totalSecond / (1000 * 60 * 60 * 24));
  hours.innerHTML = Math.floor(
    (totalSecond % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  mins.innerHTML = Math.floor((totalSecond % (1000 * 60 * 60)) / (1000 * 60));
  secs.innerHTML =
    Math.floor((totalSecond % (1000 * 60)) / 1000) < 10
      ? "0" + Math.floor((totalSecond % (1000 * 60)) / 1000)
      : Math.floor((totalSecond % (1000 * 60)) / 1000);
};

setInterval(countDown, 1000);
