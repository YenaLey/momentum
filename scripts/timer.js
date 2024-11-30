let timerBox = document.querySelectorAll("main.timer")[0];
let timerNum = document.createElement("h2");
let isRunning = false;
let timerInterval;
let time = parseInt(localStorage.getItem("timer")) || 0;
let startTimestamp = parseInt(localStorage.getItem("startTimestamp")) || null;
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
  if (!startTimestamp) {
    startTimestamp = Date.now() - time * 1000; // Adjust for existing time
    localStorage.setItem("startTimestamp", startTimestamp);
  }

  timerInterval = setInterval(() => {
    const now = Date.now();
    time = Math.floor((now - startTimestamp) / 1000);
    updateTimerDisplay();
    localStorage.setItem("timer", time);
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  localStorage.removeItem("startTimestamp");
  startTimestamp = null;
}

function toggleTimer() {
  if (isRunning) {
    stopTimer();
    timerNum.classList.remove("pulse");
  } else {
    startTimer();
    timerNum.classList.add("pulse");
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

// Recover time on page load
if (startTimestamp) {
  const now = Date.now();
  time = Math.floor((now - startTimestamp) / 1000);
  updateTimerDisplay();
}
