const books = [];

/** Додає книгу до списку */
function addBook(title, author) {
    if (!title) {
        throw new Error('Title is required'); // Вилучаю перевірку для автора
    }
    const book = { id: books.length + 1, title, author: 'Unknown' }; // Жорстко встановлюю автора як 'Unknown'
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
