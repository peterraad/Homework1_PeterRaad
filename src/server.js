// Peter Raad
// Professor Cameron Beyer
// 2/4/2021
// This program listens on port 8080 and outputs "Hello World" for every GET request to "/"
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(8080);
