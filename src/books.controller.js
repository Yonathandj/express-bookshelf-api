const { nanoid } = require('nanoid');
const books = require('./books.model');

function postBook(req, res) {
  const { title, tags, body } = req.body;
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newBook = {
    id,
    title,
    tags,
    body,
    createdAt,
    updatedAt,
  };
  books.push(newBook);
  const isAvailable = books.filter((book) => book.id === id);
  if (isAvailable) {
    res.status(201).json({
      status: 'success',
      id,
    });
  } else {
    res.status(400).json({
      status: 'failed',
    });
  }
}

function getAllBooks(req, res) {
  res.status(200).json({
    books,
  });
}

function getSpecificBook(req, res) {
  const { id } = req.params;
  const indexSearchedBook = books.findIndex((book) => book.id === id);
  if (indexSearchedBook !== -1) {
    res.status(200).json({
      status: 'success',
      book: books[indexSearchedBook],
    });
  } else {
    res.status(404).json({
      status: 'failed',
      message: 'Book you are looking for is not found',
    });
  }
}

module.exports = { postBook, getAllBooks, getSpecificBook };
