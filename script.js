const timerDisplay = document.querySelector(".timer");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");

let timer;
let duration = 300;
let isRunning = false;

function startTimer() {
  let remainingTime = duration;
  isRunning = true;
  timer = setInterval(() => {
    const minutes = parseInt(remainingTime / 60, 10);
    const seconds = parseInt(remainingTime % 60, 10);

    timerDisplay.textContent = `${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;

    if (--remainingTime < 0) {
      clearInterval(timer);
      timerDisplay.textContent = "time is up";
      isRunning = false;
    }
  }, 1000);
}

startBtn.addEventListener("click", () => {
  console.log("start btn clicked");
  if (!isRunning) {
    startTimer();
  }
});
stopBtn.addEventListener("click", () => {
  console.log("stop btn clicked");
  clearInterval(timer);
  isRunning = false;
});
