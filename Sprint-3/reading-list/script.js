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

const list = document.querySelector("#reading-list");
list.classList.add("reading-list");
//List of the books that have been read first
const sortedBooks = [
  ...books.filter((book) => !book.alreadyRead),
  ...books.filter((book) => book.alreadyRead),
];

sortedBooks.forEach((book) => {
  const li = document.createElement("li");

  li.innerHTML = `
  <img src="${book.bookCoverImage}" />
    <p>${book.title}</p>
    <p>${book.author}</p>
  `;

  const color = book.alreadyRead ? "green" : "red";
  li.style.backgroundColor = color;
  li.setAttribute("data-read", book.alreadyRead ? "true" : "false");

  list.appendChild(li);
  console.log("reading-list: set", book.title, li.style.backgroundColor);
});

// debug: log first li style values for test assertions
const _firstLi = list.querySelector(":first-child");
if (_firstLi) {
  console.log("reading-list: FIRSTSTYLE attr=", _firstLi.getAttribute("style"));
  console.log("reading-list: FIRSTSTYLE prop=", _firstLi.style.backgroundColor);
  console.log(
    "reading-list: FIRSTSTYLE computed=",
    window.getComputedStyle(_firstLi).backgroundColor
  );
}
