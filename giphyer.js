'use strict';
//Node Modules
const request = require('request-promise');

//My Modules and Settings
const giphyKey = require('./settings.js').giphyKey;
const addressUser = require('./textContent.js').addressUser;
const utils = require('./utils.js');
const giphyURL = `http://api.giphy.com/v1/gifs/random?api_key=${giphyKey}&tag=coffee`;

function getGiphy(session){

	request(giphyURL).then((response)=>{
		let giphyBody = JSON.parse(response);
		giphyBody = giphyBody.data.image_url;

		session.send(utils.randomPhraser(addressUser) + utils.chooseNamePart(session.message.user.name) + ':');
		session.send(giphyBody);
	});
};

module.exports = getGiphy;