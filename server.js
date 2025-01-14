const { response } = require('express');
// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require('express');
const fs = require('fs');
const app = express();
//load the quotes JSON
const quotes = require('./quotes.json');
const lodash = require('lodash');
const cors = require('cors');

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get('/', function (request, response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...

app.use(cors());

app.get('/quotes', (req, res) => {
  res.send(quotes);
});

app.get('/quotes/random', (req, res) => {
  res.send(lodash.sample(quotes));
});

app.get('/quotes/search', (req, res) => {
  const termQuery = req.query.term.toLowerCase();
  const search = quotes.filter((quote) => quote.quote.toLowerCase().includes(termQuery) || quote.author.toLowerCase().includes(termQuery));
  res.send(search);
});

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
/* function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
 */
//Start our server so that it listens for HTTP requests!

// SERVER
const port = 5000;
const url = `http://localhost:${port}/quotes`;
app.listen(port, () => console.log(`Listening on port ${url}`));
