let clock = document.getElementsByClassName("clock")[0];
let clockTop = document.createElement("h1");
let clockBottom = document.createElement("h2");
clock.append(clockTop, clockBottom);

function getClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const date = String(now.getDate()).padStart(2, "0");

  const dayList = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const day = dayList[now.getDay()];

  clockTop.innerText = `${hours}:${minutes}:${seconds}`;
  clockBottom.innerText = `${year}.${month}.${date} ${day}`;
}

getClock();
setInterval(getClock, 1000);
