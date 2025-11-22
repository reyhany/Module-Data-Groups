// The list of images as defined in the tests
const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

const imgEl = document.querySelector("#carousel-img");
const forwardBtn = document.querySelector("#forward-btn");
const backwardBtn = document.querySelector("#backward-btn");
const autoForwardBtn = document.querySelector("#auto-forward");
const autoBackwardBtn = document.querySelector("#auto-backward");
const stopBtn = document.querySelector("#stop");

let currentIndex = 0;
let timerId = null;
const interval = 2000;

function showImage() {
  imgEl.src = images[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
}

// Manuel control buttons
if (forwardBtn) {
  forwardBtn.addEventListener("click", nextImage);
}

if (backwardBtn) {
  backwardBtn.addEventListener("click", prevImage);
}

function startAuto(direction) {
  if (timerId !== null) return;

  autoForwardBtn.disabled = true;
  autoBackwardBtn.disabled = true;

  if (direction === "forward") {
    timerId = setInterval(nextImage, interval);
  } else if (direction === "backward") {
    timerId = setInterval(prevImage, interval);
  }
}

function stopAuto() {
  if (timerId !== null) {
    clearInterval(timerId);
    timerId = null;
  }
  autoForwardBtn.disabled = false;
  autoBackwardBtn.disabled = false;
}

// Otomatik control buttons
if (autoForwardBtn) {
  autoForwardBtn.addEventListener("click", () => {
    startAuto("forward");
  });
}

if (autoBackwardBtn) {
  autoBackwardBtn.addEventListener("click", () => {
    startAuto("backward");
  });
}

if (stopBtn) {
  stopBtn.addEventListener("click", stopAuto);
}
