const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/shout', (req, res) => {
  const { name } = req.query;
  const uppserCaseName = name.toUpperCase();
  res.send(uppserCaseName);
});

app.get('/fullname', (req, res) => {
  const { firstName, lastName } = req.query;
  const fullName = `${firstName} ${lastName}`;
  res.send(fullName);
});

app.get('/date', (req, res) => {
  const { month, year } = req.query;
  res.send(`${month} ${year}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
