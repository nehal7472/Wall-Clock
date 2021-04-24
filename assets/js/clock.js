const anaSecond = document.querySelector("[data-second-hand]");
const anaMinute = document.querySelector("[data-minute-hand]");
const anaHour = document.querySelector("[data-hour-hand]");

function setClock() {
  const currentDate = new Date();

  const second = currentDate.getSeconds();
  const minute = currentDate.getMinutes();
  const hour = currentDate.getHours();

  const secondRatio = second / 60;
  const minuteRatio = (secondRatio + minute) / 60;
  const hourRatio = (minuteRatio + hour) / 12;

  setRatio(anaSecond, secondRatio);
  setRatio(anaMinute, minuteRatio);
  setRatio(anaHour, hourRatio);
}

function setRatio(elem, rotationRatio) {
  elem.style.setProperty("--rotation", rotationRatio * 360);
}

setInterval(setClock, 1000);
setClock();
