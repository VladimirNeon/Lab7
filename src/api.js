const axios = require('axios');

/** Отримує список книг з API */
async function fetchBooksFromAPI() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data.map(post => ({ id: post.id, title: post.title, author: 'Unknown' }));
}

module.exports = { fetchBooksFromAPI };