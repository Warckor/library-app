const bookList = document.querySelector('.books')
const addNewBook = document.querySelector('.add-new-book')
const addButton = document.querySelector('.add')
const dialogBox = document.querySelector('.dialog-box')

const Book = (title, author, pages, read) => {
  return {
    title,
    author,
    pages,
    read
  }
}

const addBook = (title, author, pages, read) => {
  const book = new Book(title, author, pages, read)
  return book
}

addNewBook.addEventListener('click', () => {
  console.log('clicked')
  dialogBox.showModal()
})