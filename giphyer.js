'use strict';
const request = require('request-promise');
const giphyKey = require('./settings.js').giphyKey;
const giphyURL = `http://api.giphy.com/v1/gifs/random?api_key=${giphyKey}&tag=coffee`;

function getGiphy(){
	let giphy = {};

	cosnt options = {
		uri: giphyURL,

	}
	// request.get(giphyURL, (err, response, body)=>{
	request(giphyURL).then(response)=>{
		let giphyBody = JSON.parse(response.body);
		giphyBody = giphyBody.data;

		return giphy = giphyBody;
	};

	// return giphy;
};

module.exports = getGiphy;