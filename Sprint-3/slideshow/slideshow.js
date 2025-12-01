// The list of images as defined in the tests
const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

let currentIndex = 0;
let timerId = null;
const interval = 2000;

function showImage() {
  const imgEl = document.querySelector("#carousel-img");
  if (imgEl) {
    imgEl.src = images[currentIndex];
  }
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
}

function startAuto(direction) {
  if (timerId !== null) return;

  const autoForwardBtn = document.querySelector("#auto-forward");
  const autoBackwardBtn = document.querySelector("#auto-backward");

  if (autoForwardBtn) autoForwardBtn.disabled = true;
  if (autoBackwardBtn) autoBackwardBtn.disabled = true;

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

  const autoForwardBtn = document.querySelector("#auto-forward");
  const autoBackwardBtn = document.querySelector("#auto-backward");

  if (autoForwardBtn) autoForwardBtn.disabled = false;
  if (autoBackwardBtn) autoBackwardBtn.disabled = false;
}

// Manual control buttons
const forwardBtn = document.querySelector("#forward-btn");
if (forwardBtn) {
  forwardBtn.addEventListener("click", nextImage);
}

const backwardBtn = document.querySelector("#backward-btn");
if (backwardBtn) {
  backwardBtn.addEventListener("click", prevImage);
}

// Auto control buttons
const autoForwardBtn = document.querySelector("#auto-forward");
if (autoForwardBtn) {
  autoForwardBtn.addEventListener("click", () => {
    startAuto("forward");
  });
}

const autoBackwardBtn = document.querySelector("#auto-backward");
if (autoBackwardBtn) {
  autoBackwardBtn.addEventListener("click", () => {
    startAuto("backward");
  });
}

const stopBtn = document.querySelector("#stop");
if (stopBtn) {
  stopBtn.addEventListener("click", stopAuto);
}

// Initialize - display the first image
showImage();
