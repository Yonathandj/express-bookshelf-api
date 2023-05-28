const express = require('express');

const { postBook, getAllBooks, getSpecificBook } = require('./books.controller');

const app = express();
const PORT = 3000;

app.use(express.json());
app.post('/books', postBook);
app.get('/books', getAllBooks);
app.get('/books/:id', getSpecificBook);
app.listen(PORT, () => {
  console.log(`Server is listening on localhost:${PORT}`);
});
