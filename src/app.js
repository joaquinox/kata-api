const express = require('express');
const {
  sayHello, uppercase, lowercase, firstCharacter, firstCharacters,
} = require('./lib/strings');
const { add } = require('./lib/numbers');

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  if (!req.query.length) {
    return res.json({ result: firstCharacter(req.params.string) });
  }
  return res.json({ result: firstCharacters(req.params.string, req.query.length) });
});

app.get('/numbers/add/:a/and/:b', (req, res) => {
  res.status(200).json({ result: add(req.params.a, req.params.b) });
});

module.exports = app;
