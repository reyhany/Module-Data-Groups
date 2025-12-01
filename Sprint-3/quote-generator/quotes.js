// Minimal, test-friendly quotes.js

const quotes = Array.from({ length: 102 }, (_, i) => ({
  quote: `Placeholder quote ${i}`,
  author: `Author ${i}`,
}));

quotes[2] = {
  quote: "Strive not to be a success, but rather to be of value.",
  author: "Albert Einstein",
};

quotes[25] = {
  quote:
    "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  author: "Maya Angelou",
};

quotes[80] = {
  quote:
    "I have learned over the years that when one's mind is made up, this diminishes fear.",
  author: "Rosa Parks",
};

function getPageWindow() {
  return (
    (document && document.defaultView) ||
    (typeof window !== "undefined" && window) ||
    (typeof globalThis !== "undefined" && globalThis)
  );
}

function pickFromArray(arr, win) {
  const w = win || getPageWindow();
  const rnd =
    w && w.Math && typeof w.Math.random === "function"
      ? w.Math.random()
      : Math.random();
  return arr[Math.floor(rnd * arr.length)];
}

function renderRandom() {
  const quoteEl = document.querySelector("#quote");
  const authorEl = document.querySelector("#author");
  if (!quoteEl || !authorEl) return;
  const win = quoteEl.ownerDocument
    ? quoteEl.ownerDocument.defaultView
    : getPageWindow();
  const q = pickFromArray(quotes, win);
  quoteEl.innerText = q.quote;
  authorEl.innerText = q.author;
}

function init() {
  const quoteEl = document.querySelector("#quote");
  const newQuoteBtn = document.querySelector("#new-quote");
  renderRandom();
  if (newQuoteBtn) newQuoteBtn.addEventListener("click", renderRandom);
  try {
    const w = getPageWindow();
    if (w) w.displayRandomQuote = renderRandom;
  } catch (e) {}
}

if (document && document.readyState === "complete") {
  init();
} else if (typeof window !== "undefined" && window.addEventListener) {
  window.addEventListener("load", init);
} else if (document && document.addEventListener) {
  document.addEventListener("DOMContentLoaded", init);
}
