const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, it is my 1st CI/CD project!');
  res.send('Hello, it is my 1st CI/CD project! and the change number is 1');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
