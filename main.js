const bookList = document.querySelector('.books');
const addNewBook = document.querySelector('.add-new-book');
const addButton = document.querySelector('.add');
const modal = document.querySelector('.modal');

const Book = (title, author, pages, read) => {
  return {
    title,
    author,
    pages,
    read
  }
}