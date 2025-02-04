// Create web server
// Create a web server that listens on port 3000.
// The server should respond with the following content for requests to the specified paths:

// /cats
// cats are great
// /dogs
// dogs are better
// /cats_and_dogs
// cats and dogs living together
// /greet/:name
// hello, name
// /year
// 2020
// /search
// You must search with a query
// /greet
// You must provide a name
// /year
// 2020
// /search
// You must search with a query
// /greet
// You must provide a name
// /year
// 2020
// /search
// You must search with a query
// /greet
// You must provide a name
// The server should respond with a 404 status code for all other paths.

const express = require('express');
const app = express();
const port = 3000;

app.get('/cats', (req, res) => {
  res.send('cats are great');
});

app.get('/dogs', (req, res) => {
  res.send('dogs are better');
});

app.get('/cats_and_dogs', (req, res) => {
  res.send('cats and dogs living together');
});

app.get('/greet/:name', (req, res) => {
  res.send(`hello, ${req.params.name}`);
});

app.get('/year', (req, res) => {
  res.send('2020');
});

app.get('/search', (req, res) => {
  res.send('You must search with a query');
});

app.get('/greet', (req, res) => {
  res.send('You must provide a name');
});

app.get('*', (req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});