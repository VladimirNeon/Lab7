const { addBook, getBooks, findBookById } = require('../src/books');

test('Додавання книги', () => {
    const book = addBook('Clean Code', 'Robert Martin');
    expect(book).toEqual({ id: 1, title: 'Clean Code', author: 'Robert Martin' });
});

test('Отримання списку книг', () => {
    addBook('The Pragmatic Programmer', 'Andy Hunt');
    const books = getBooks();
    expect(books.length).toBe(2);
});

test('Пошук книги за ID', () => {
    const book = findBookById(1);
    expect(book).toEqual({ id: 1, title: 'Clean Code', author: 'Robert Martin' });
});