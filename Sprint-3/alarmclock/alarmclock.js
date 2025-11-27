let timeRemaining = 0;
let intervalId = null;

function setAlarm() {
  const input = document.getElementById("alarmSet");
  timeRemaining = Number(input.value);

  updateDisplay();

  if (intervalId) clearInterval(intervalId);

  intervalId = setInterval(() => {
    timeRemaining--;

    if (timeRemaining <= 0) {
      timeRemaining = 0;
      updateDisplay();
      clearInterval(intervalId);
      playAlarm(); // Test check this line
    } else {
      updateDisplay();
    }
  }, 1000);
}

function updateDisplay() {
  const minutes = String(Math.floor(timeRemaining / 60)).padStart(2, "0");
  const seconds = String(timeRemaining % 60).padStart(2, "0");
  document.getElementById("timeRemaining").innerText =
    `Time Remaining: ${minutes}:${seconds}`;
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
