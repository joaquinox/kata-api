const express = require('express');

const {
  sayHello, uppercase, lowercase, firstCharacter, firstCharacters,
} = require('./lib/strings');
const { 
  add, subtract, multiply, divide, remainder,
} = require('./lib/numbers');

const app = express();

app.use(express.json());


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
    res.json({ result: firstCharacter(req.params.string) });
  } else {
    res.json({ result: firstCharacters(req.params.string, req.query.length) });
  }
});

app.get('/numbers/add/:a/and/:b', (req, res) => {
  if (isNaN(req.params.a || req.params.b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: add(parseInt(req.params.a), parseInt(req.params.b)) });
  }
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  if (isNaN(req.params.a || req.params.b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: subtract(parseInt(req.params.a), parseInt(req.params.b)) });
  }
});

app.post('/numbers/multiply', (req, res) => {
  if (parseInt(req.body.a) && parseInt(req.body.b)) {
    res.status(200).json({ result: multiply(req.body.a, req.body.b) });
  } else if (!req.body.a || !req.body.b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
});

app.post('/numbers/divide', (req, res) => {
  if (parseInt(req.body.a) && parseInt(req.body.b)) {
    res.status(200).json({ result: divide(req.body.a, req.body.b) });
  } else if (req.body.a === 0) {
    res.status(200).json({ result: divide(0, req.body.b) });
  } else if (req.body.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (!req.body.a || !req.body.b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
});

app.post('/numbers/remainder', (req, res) => {
  if (parseInt(req.body.a) && parseInt(req.body.b)) {
    res.status(200).json({ result: remainder(req.body.a, req.body.b) });
  } else if (req.body.a === 0) {
    res.status(200).json({ result: remainder(0, req.body.b) });
  } else if (req.body.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (!req.body.a || !req.body.b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});


module.exports = app;
