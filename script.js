const gridContainer = document.querySelector(".grid-container");

const addButton = document.querySelector("#add-button");
const clearButton = document.querySelector("#clear-button");

const bookName = document.querySelector("#book-name");
const bookAuthor = document.querySelector("#book-author");
const noOfPages = document.querySelector("#book-pages");

function Book(bookName, bookAuthor, noOfPages) {
    this.bookName = bookName;
    this.bookAuthor = bookAuthor;
    this.noOfPages = noOfPages;
}

let books = [];

addButton.addEventListener('click', addButtonHandler);
clearButton.addEventListener('click', clearButtonHandler);

function addButtonHandler() {
    const isFull = bookName.value != "" && bookAuthor.value != "" && noOfPages.value != "";

    if (isFull) {

        const book = new Book(bookName.value, bookAuthor.value, noOfPages.value);
        books.push(book);

        const name = document.createElement("div");
        name.setAttribute("style", "font-weight: bold; font-size: 1.3rem; color: black; margin-bottom: 0.4rem;");
        name.textContent = `${book.bookName}`;

        const author = document.createElement("div");
        author.setAttribute("style", "font-size: 1rem; color: #3c3836;");
        author.textContent = `by ${book.bookAuthor}`;

        const pages = document.createElement("div");
        pages.setAttribute("style", "font-size: 1rem; color: #3c3836;");
        pages.textContent = `${book.noOfPages} pages`;
        
        const card = document.createElement("div");

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            if (books.includes(book)) {
                const index = books.indexOf(book);
                if (index > -1) {
                    books.splice(index, 1);
                }
                gridContainer.removeChild(card);
            }
        });

        card.classList.add("card");
        deleteButton.id = "delete-button";

        card.appendChild(name);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(deleteButton);

        if (books.includes(book)) {
            gridContainer.appendChild(card);
        }

        bookName.value = "";
        bookAuthor.value = "";
        noOfPages.value = "";


    }
}

function clearButtonHandler() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    books = [];
}