'use strict';
//Node Modules
const restify = require('restify');
const builder = require('botbuilder');
const moment = require('moment');

//My Modules and Settings
const settings = require('./settings.js');
const textContent = require('./textContent.js').BOT_PHRASES;
const randomFact = require('./textContent.js').randomCoffeeFact;
const utils = require('./utils.js');

//=========================================================
// Bot Setup
//=========================================================

// Setup Restify Server
let server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 8080, ()=>{
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
bot.on('contactRelationUpdate', (message)=>{
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

bot.on('typing', (message)=>{
  // User is typing
  message.send(`I see you're typing something, is it cold brew related?`);
});

bot.on('deleteUserData', (message)=>{
    // User asked to delete their data
});

//=========================================================
// Bots Dialogs Actions
//=========================================================

bot.beginDialogAction('help', '/help', { matches: /^help/i });
bot.beginDialogAction('menu', '/menu', { matches: /^menu/i });

//=========================================================
// Bots Dialogs
//=========================================================

String.prototype.contains = function(content){
  return this.indexOf(content) !== -1;
}

function displayMenuText(session){
   session.endDialog(textContent.menuPhrase);
}

bot.dialog('/help', [
    (session)=>{displayMenuText(session);}
]);

bot.dialog('/menu', [
    (session)=>{displayMenuText(session);}
]);

//Rest of the command logic
bot.dialog('/', function (session) {
  
    if(textLookup('greeting') || textLookup('hi') || textLookup('hello'))
      session.send(utils.randomPhraser(textContent.greeting));
    else if(textLookup('coffee me'))
      session.send(textContent.inProgress);
      // coffeedMe();
    else if(textLookup('random') && textLookup('fact'))
      session.send(utils.randomPhraser(randomFact));
    else if (textLookup('how') && textLookup('long'))
      session.send(calculateTimeToCoffee());
    else if (textLookup('change') && textLookup('times'))
      session.send(modifySetTimes());
    else if(textLookup('timings'))
      displayTimings();
    else
      session.send(utils.randomPhraser(textContent.confused));

    //Extrapolated the text lookup because we have lots of keywords
    function textLookup(text){
      return session.message.text.toLowerCase().contains(text);
    };

    //Uses moment to let user know how far away they are from the cold brew moments.
    function calculateTimeToCoffee(){
      // let timeCalculated = moment().toNow();
      session.send(textContent.inProgress);
    }

    function coffeedMe(){
      let giphyer = require('./giphyer.js');
      giphyer();
    }

    function displayTimings(){
      let simpleReady = utils.momentFormatter(settings.brewReadyTime);
      let simpleOver = utils.momentFormatter(settings.brewOverTime);
      let simpleReminder = utils.momentFormatter(settings.reminderTime);
      let simpleMake = utils.momentFormatter(settings.makeTime);

      let currentTimeValues = `
      Your reminders are at ${simpleReady} and ${simpleReminder}.
      You can take your coffee out at * ${simpleOver} *.
      You should make coffee at * ${simpleMake} *.`;
      session.send(currentTimeValues);
    };

    //Changes the settings reminder, brew, and remove times for coffee
    function modifySetTimes(){
      session.send('Still under work!');
      // switch()
    }

    //Does a 30 second check to make sure that we get the time.
    const timeIntervalCheck = 30 * 1000;
    setInterval(()=>{checkTime()},timeIntervalCheck);

    function checkTime(){
      let currentMoment = moment().format('HH:mm');

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
      }
    }

    
});
