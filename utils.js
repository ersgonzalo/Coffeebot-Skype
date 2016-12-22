'use strict';
//Node Modules
const moment = require('moment');

//My Modules and Settings
const settings = require('./settings.js');
const textContent = require('./textContent.js').botPhrases;

function checkTime(session){
	let currentDayOfWeek = moment().format('d');
	let isNotWeekend = currentDayOfWeek != '6' || currentDayOfWeek != '0';
	if(isNotWeekend){
	  let currentMoment = moment().format('HH:mm');
	  //TODO: Eventually break this up and randomize the minute greeting
		let morningGreet = '09:00';
  	let eveningGreet = '02:16';

	  switch (currentMoment){
	    case settings.brewReadyTime:
	      session.send(textContent.brewReadyPhrase);
	      break;
	    case settings.brewOverTime:
	      session.send(textContent.brewOverPhrase);
	      break;
	    case settings.reminderTime:
	      session.send(textContent.makeCoffeePhrase);
	      break;
	    case settings.makeTime:
	      session.send(textContent.reminderPhrase);
	      break;
	    case morningGreet:
	    	session.send(textContent.morning);
	    	break;
	    case eveningGreet:
	    	session.send(textContent.evening);
	    	break;
	  }
	}
};

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
	checkTime: checkTime,
	chooseNamePart: chooseNamePart,
	momentFormatter: momentFormatter,
	randomPhraser: randomPhraser,
};