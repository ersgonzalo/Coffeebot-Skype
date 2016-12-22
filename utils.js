'use strict';
const moment = require('moment');

function chooseNamePart(userName){
	userName = userName.split(' ');
	let nameChosen = userName[parseInt(Math.random() * userName.length)];
	return nameChosen;
};

function momentFormatter(momentTimeString){
	return moment(momentTimeString, 'H:mm a').format('h:mm a');
};

function randomPhraser(phraseArray){
	let randomIndex = parseInt(Math.random() * phraseArray.length);
  return phraseArray[randomIndex];
};

module.exports = {
	chooseNamePart: chooseNamePart,
	momentFormatter: momentFormatter,
	randomPhraser: randomPhraser,
};