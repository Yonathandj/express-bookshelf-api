const express = require('express');

const app = express();
const PORT = 3000;

app.post('/books');

app.listen(PORT, () => {
  console.log(`Server is listening on localhost:${PORT}`);
});
