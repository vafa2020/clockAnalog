const hourDiv = document.querySelector(".hour");
const minuteDiv = document.querySelector(".minute");
const secondDiv = document.querySelector(".second");
const timeDiv = document.querySelector(".time");

const setDate = () => {
  const todey = new Date();

  const second = todey.getSeconds();
  const secondDeg = (second / 60) * 360 + 360;
  secondDiv.style.transform = `rotate(${secondDeg}deg)`;

  const minute = todey.getMinutes();
  const minuteDeg = (minute / 60) * 360;
  minuteDiv.style.transform = `rotate(${minuteDeg}deg)`;

  const hour = todey.getHours();
  const hourDeg = (hour / 12) * 360;
  hourDiv.style.transform = `rotate(${hourDeg}deg)`;

  timeDiv.innerHTML = hour + ":" + minute + ":" + second;
};

setInterval(setDate, 1000);
