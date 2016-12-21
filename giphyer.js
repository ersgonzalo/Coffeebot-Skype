const http = require('http');
const giphyKey = require('./settings.js').giphyKey;
const giphyURL = `http://api.giphy.com/v1/gifs/random?api_key=${giphyKey}&tag=coffee`;

