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
  const isAvailable = books.filter(() => books.id === id);
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

module.exports = { postBook };
