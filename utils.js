'use strict';
const moment = require('moment');

function momentFormatter(momentTimeString){
	return moment(momentTimeString, 'H:mm a').format('h:mm a');
}

function randomPhraser(phraseArray){
	let randomIndex = parseInt(Math.random() * phraseArray.length);
  return phraseArray[randomIndex];
}

module.exports = {
	momentFormatter: momentFormatter,
	randomPhraser: randomPhraser,
};