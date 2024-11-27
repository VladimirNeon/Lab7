const { addBook, getBooks } = require('../src/books');
const { fetchBooksFromAPI } = require('../src/api');

test('Інтеграція API з локальним списком книг', async () => {
    const apiBooks = await fetchBooksFromAPI();
    apiBooks.forEach(book => addBook(book.title, book.author));
    const localBooks = getBooks();
    expect(localBooks.length).toBe(apiBooks.length);
});