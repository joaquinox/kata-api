const express = require('express');
const sayHello = require('./lib/strings');

const app = express();

app.get('/strings/hello/world', (req, res) => {
  res.status(200).send({ result: 'Hello world!' });
});

module.exports = app;
