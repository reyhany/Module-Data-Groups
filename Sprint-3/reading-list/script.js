// for the tests, do not modify this array of books
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

function renderReadingList() {
  const list = document.querySelector("#reading-list");
  if (!list) return;

  books.forEach((book) => {
    const li = document.createElement("li");

    const img = document.createElement("img");
    img.src = book.bookCoverImage;
    li.appendChild(img);

    const text = document.createElement("p");
    text.innerText = `${book.title} - ${book.author}`;
    li.appendChild(text);

    // background color: red if not read, green if read
    // set both the style property and CSS text to be robust in jsdom
    const color = book.alreadyRead ? "green" : "red";
    li.style.cssText = `background-color: ${color} !important;`;
    // also add a class so stylesheet rules can apply in test environments
    li.classList.add(color === "red" ? "red" : "green");

    list.appendChild(li);
  });

  // no debug logs in final version
}

// If DOM is ready, render immediately; otherwise wait for DOMContentLoaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderReadingList);
} else {
  renderReadingList();
}
