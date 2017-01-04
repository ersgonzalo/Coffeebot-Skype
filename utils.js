'use strict';
//Node Modules
const moment = require('moment');

//My Modules and Settings
const settings = require('./settings.js');
const textContent = require('./textContent.js').botPhrases;

//Calculates when you should take out your cold brew in the next day
function calculateBrewTime(session){
	let timeFromCurrentBrew = moment().add(settings.brewingTime, settings.brewingTimeShort);
	let timeString = timeFromCurrentBrew.format('HH:mm');

	settings.brewReadyTime = timeString;
	session.send(textContent.brewStartPhrase + timeString);
};

//Allows you to change the default setting for how long your cold brew should stew for
function changeBrewTime(session){
	let desiredBrewingTime = session.message;
	let coffeeRegex = new RegExp('brew change (\\d*)');
	let getBrewingTime = coffeeRegex.match(session.message)[1];
	getBrewingTime = parseInt(getBrewingTime);

	if(Number.isInteger(getBrewingTime)){
		//change brewing time
    settings.brewingTime = getBrewingTime;
    session.send(`Your brew time has been changed to be removed after ` + getBrewingTime + ` hours.`);  
  }else{
    //show an error
    session.send(`Please enter a number after the 'brew change' command!`);
  }

}

function checkTime(session) {
  let currentDayOfWeek = moment().format('d');
  let isNotWeekend = currentDayOfWeek != '6' || currentDayOfWeek != '0';
  if (isNotWeekend) {
    let currentMoment = moment().format('HH:mm');
    //TODO: Eventually break this up and randomize the minute greeting
    let morningGreetTime = '09:00';
    let eveningGreetTime = '19:00';
    const resetTime = '00:00';

    if (currentMoment == settings.brewReadyTime && !settings.isBrewReady) {
      session.send(textContent.brewReadyPhrase);
      settings.isBrewReady = true;
    } else if (currentMoment == settings.brewOverTime && !settings.isBrewOver) {
      session.send(textContent.brewOverPhrase);
      settings.isBrewOver = true;
    } else if (currentMoment == settings.makeTime && !settings.isMakeOver) {
      session.send(textContent.makeCoffeePhrase);
	    settings.isMakeOver = true;
    } else if (currentMoment == settings.reminderTime && !settings.isReminder) {
      session.send(textContent.reminderPhrase);
	    settings.isReminder = true;
    } else if (currentMoment == morningGreetTime && !settings.hasGreetedMorning) {
      session.send(textContent.morning);
      settings.hasGreetedMorning = true;
    } else if (currentMoment == eveningGreetTime && !settings.hasGreetedEvening) {
      session.send(textContent.evening);
      settings.hasGreetedEvening = true;
    } else if (currentMoment == resetTime)
      resetBrewBooleans();
  }
};

function chooseNamePart(userName) {
  userName = userName.split(' ');
  let nameChosen = userName[parseInt(Math.random() * userName.length)];
  return nameChosen;
};

//Changes the settings reminder, brew, and remove times for coffee
function modifySetTimes() {
  session.send('Still under work!');
  // switch()
}
function momentFormatter(momentTimeString) {
  return moment(momentTimeString, 'H:mm a').format('h:mm a');
};

function randomPhraser(phraseArray) {
  let randomIndex = parseInt(Math.random() * phraseArray.length);
  return phraseArray[randomIndex];
};

function resetBrewBooleans(session){
	settings.isBrewReady = false;
  settings.isBrewOver = false;
  settings.isMakeOver = false;
  settings.isReminder = false;
  settings.hasGreetedMorning = false;
  settings.hasGreetedEvening = false;
  // session.send(`It's a new day! Hey hey! \n-King JJ`);
}

function debugBrewBooleans(session){
  let tempSettings = Object.assign({}, settings);
  delete tempSettings.appId;
  delete tempSettings.appPassword;
  delete tempSettings.giphyKey;
  session.send(JSON.stringify(tempSettings, null, 2));
}

function wantCoffee(session){
	let currentMoment = moment();
	if(currentMoment < moment().set('hour', 15))
		session.send(textContent.yesWantCoffee);
	else
		session.send(textContent.noWantCoffee);
}

module.exports = {
	calculateBrewTime,
	changeBrewTime,
  checkTime,
  chooseNamePart,
  debugBrewBooleans,
  modifySetTimes,
  momentFormatter,
  randomPhraser,
  resetBrewBooleans,
  wantCoffee,
};
