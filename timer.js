let timer;
let minutes = 25;
let seconds = 0;

function updateTimerDisplay() {
  const timerDisplay = document.getElementById('timer');
  timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
  if (timer) return;
  timer = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(timer);
        timer = null;
        alert("Time's up! Take a short break!");
        return;
      }
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }
    updateTimerDisplay();
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  minutes = 25;
  seconds = 0;
  updateTimerDisplay();
}

updateTimerDisplay();
