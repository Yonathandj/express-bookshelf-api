const express = require('express');

const { postBook } = require('./books.controller');

const app = express();
const PORT = 3000;

app.use(express.json());
app.post('/books', postBook);

app.listen(PORT, () => {
  console.log(`Server is listening on localhost:${PORT}`);
});
