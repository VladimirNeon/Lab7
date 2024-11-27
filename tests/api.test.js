const { fetchBooksFromAPI } = require('../src/api');

test('Отримання книг з API', async () => {
    const books = await fetchBooksFromAPI();
    expect(books).toBeInstanceOf(Array);
    expect(books[0]).toHaveProperty('id');
    expect(books[0]).toHaveProperty('title');
});