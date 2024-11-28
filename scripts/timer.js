let timerBox = document.querySelectorAll("main.timer")[0];
let timerNum = document.createElement("h2");
let isRunning = false;
let timerInterval;
let time = parseInt(localStorage.getItem("timer")) || 0;
updateTimerDisplay();
timerBox.append(timerNum);

function updateTimerDisplay() {
  let hour = Math.floor(time / 3600);
  let min = Math.floor((time % 3600) / 60);
  let sec = time % 60;

  timerNum.innerText =
    String(hour).padStart(2, "0") +
    ":" +
    String(min).padStart(2, "0") +
    ":" +
    String(sec).padStart(2, "0");
}

function startTimer() {
  timerInterval = setInterval(() => {
    time++;
    updateTimerDisplay();
    localStorage.setItem("timer", time);
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function toggleTimer() {
  if (isRunning) {
    stopTimer();
  } else {
    startTimer();
  }
  isRunning = !isRunning;
}

timerBox.addEventListener("click", () => {
  toggleTimer();
});

document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "c" || e.key === "ㅊ") {
    toggleTimer();
  }
});
