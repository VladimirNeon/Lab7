const books = [];

/** Додає книгу до списку */
function addBook(title, author) {
    if (!title || !author) {
        throw new Error('Title and author are required');
    }
    const book = { id: books.length + 1, title, author };
    books.push(book);
    return book;
}

/** Повертає всі книги */
function getBooks() {
    return books;
}

/** Знаходить книгу за ID */
function findBookById(id) {
    return books.find(book => book.id === id);
}

module.exports = { addBook, getBooks, findBookById };