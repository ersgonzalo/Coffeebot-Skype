'use strict';
//Node Modules
const builder = require('botbuilder');
const moment = require('moment');
const restify = require('restify');

//My Modules and Settings
const randomFact = require('./textContent.js').randomCoffeeFact;
const settings = require('./settings.js');
const textContent = require('./textContent.js').botPhrases;
const eightBall = require('./textContent.js').magicEightBall;
const utils = require('./utils.js');

//=========================================================
// Bot Setup
//=========================================================

// Setup Restify Server
let server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 8080, () => {
  console.log('%s listening to %s', server.name, server.url);
});

// Create chat bot
let connector = new builder.ChatConnector({
  appId: settings.appId,
  appPassword: settings.appPassword
});


let bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

//Bot on
bot.on('contactRelationUpdate', (message) => {
  if (message.action === 'add') {
    let name = message.user ? message.user.name : null;
    let reply = new builder.Message()
      .address(message.address)
      .text(textContent.onAdded, name || 'there');
    bot.send(reply);
  } else {
    // delete their data
  }
});

bot.on('typing', (message) => {
  // User is typing
  message.send(`I see you're typing something, is it cold brew related?`);
});

bot.on('deleteUserData', (message) => {
  // User asked to delete their data
  let reply = new builder.Message()
      .address(message.address)
      .text('Resetting bot data, give me a second...');
  bot.send(reply);
});

//=========================================================
// Bots Dialogs Actions
//=========================================================

bot.beginDialogAction('help', '/help', { matches: /^help/i });
bot.beginDialogAction('menu', '/menu', { matches: /^menu/i });

//=========================================================
// Bots Dialogs
//=========================================================

String.prototype.contains = function(content) {
  return this.indexOf(content) !== -1;
}

function displayMenuText(session) {
  session.endDialog(textContent.menuPhrase);
}

bot.dialog('/help', [(session) => { displayMenuText(session); }]);
bot.dialog('/menu', [(session) => { displayMenuText(session); }]);

//Rest of the command logic
bot.dialog('/', function(session) {

  let currentTimeStamp = moment().format('M/D/YY HH:mm');

  console.log(currentTimeStamp, session.message.user.name, session.message.text);
  if (textLookup('magic coffee cup, ') && textLookup('?'))
    session.send(utils.randomPhraser(eightBall));
  else if (textLookup('Do I want coffee?'))
    utils.wantCoffee(session);
  else if (textLookup('reset') && textLookup('boolean'))
    utils.resetBrewleans(session);
  else if (textLookup('coffee me'))
    coffeedMe(session);
  else if (textLookup('random') && textLookup('fact'))
    session.send(utils.randomPhraser(randomFact));
  else if (textLookup('how') && textLookup('long'))
    session.send(calculateTimeToCoffee());
  else if (textLookup('change') && textLookup('times'))
    session.send(modifySetTimes());
  else if (textLookup('brew start'))
    utils.calculateBrewTime(session);
  else if (textLookup('brew time change'))
    utils.changeBrewTime(session);
  else if (textLookup('greeting') || textLookup('hi') || textLookup('hello'))
    session.send(utils.randomPhraser(textContent.greeting));
  else if (textLookup('timings'))
    displayTimings();
  else if (textLookup('brew reset fully'))
    utils.resetFully(session);
  else if (textLookup('info'))
    session.send(textContent.botInfo);
  else if (textLookup('test')){
    utils.checkTime(session);
    session.send('Debugging here.');
    utils.debugBrewleans(session);
  }
  else
    session.send(utils.randomPhraser(textContent.confused));

  //Extrapolated the text lookup because we have lots of keywords
  function textLookup(text) {
    text = text.toLowerCase();
    return session.message.text.toLowerCase().contains(text);
  };

  //Uses moment to let user know how far away they are from the cold brew moments.
  function calculateTimeToCoffee() {
    // let timeCalculated = moment().toNow();
    session.send(textContent.inProgress);
  }

  //Uses giphy api to get a random gif associated with coffee for a user
  function coffeedMe(session) {
    let giphyer = require('./giphyer.js');
    giphyer(session);
  }

  //General reminder of when coffee time is
  function displayTimings() {
    let simpleReady = utils.momentFormatter(settings.brewReadyTime);
    let simpleOver = utils.momentFormatter(settings.brewOverTime);
    let simpleReminder = utils.momentFormatter(settings.reminderTime);
    let simpleMake = utils.momentFormatter(settings.makeTime);

    let currentTimeValues = `
      Your reminders are at ${simpleReady} and ${simpleReminder}.
      You can take your coffee out at ${simpleOver}.
      You should make coffee at ${simpleMake}.`;
    session.send(currentTimeValues);
  };

  //Does a check every minute to make sure that we get the time.
  const timeIntervalCheck = 60 * 1000;
  setInterval(()=>{utils.checkTime(session);},timeIntervalCheck);
});
