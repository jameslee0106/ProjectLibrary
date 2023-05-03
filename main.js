let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead  = function() {
  this.read = !this.read;
}

function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
}

function render() {
  let libraryBook = document.querySelector("#library");
  libraryBook.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.innerHTML = `<p>${book.title}</p>
    <p>${book.author}</p>
    <p>${book.pages}</p>
    <p class ="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
    <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
    <button class="toggle-read-btn" onclick="toggleRead(${i})"> Read/Not Read </button>`
    
    libraryBook.appendChild(bookEl);
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}

let newBookBtn = document.querySelector("#new-book");
newBookBtn.addEventListener("click", function () {
  let newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "block";
})

document.querySelector("#new-book-form").addEventListener("submit", function () {
  event.preventDefault();
  addBookToLibrary();
})