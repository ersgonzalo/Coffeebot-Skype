'use strict';
//Node Modules
const restify = require('restify');
const builder = require('botbuilder');
const moment = require('moment');

//My Modules and Settings
const settings = require('./settings.js');
const textContent = require('./textContent.js').BOT_PHRASES;
const randomFact = require('./textContent.js').randomCoffeeFact;

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

bot.beginDialogAction('help', '/help', { matches: /^help/i });
//=========================================================
// Bots Dialogs
//=========================================================

String.prototype.contains = function(content){
  return this.indexOf(content) !== -1;
}

bot.dialog('/help', [
    function (session) {
        session.endDialog("Global commands that are available anytime:\n\n* menu - Exits a demo and returns to the menu.\n* goodbye - End this conversation.\n* help - Displays these commands.");
    }
]);

bot.dialog('/', function (session) {
  
    if(textLookup('greeting') || textLookup('hi'))
      session.send(textContent.greeting);
    else if(textLookup('coffee me'))
      session.send(textContent.coffeeMeStart);
    else if(textLookup('random') && textLookup('fact'))
      session.send(randomFactizer());
    else
      session.send(textContent.confused);

    //Extrapolated the text lookup because we have lots of keywords
    function textLookup(text){
      return session.message.text.toLowerCase().contains(text);
    };

    function randomFactizer(){
      let randomIndex = parseInt(Math.random() * randomFact.length - 1);
      return randomFact[randomIndex];
    }

    //Does a 30 second check to make sure that we get the time.
    const timeIntervalCheck = 30 * 1000;
    setInterval(()=>{checkTime()},timeIntervalCheck);

    function checkTime(){

      let currentMoment = moment().format('hh:mm');
      const brewReadyTime = '10:30';
      const brewOverTime = '11:00';
      const reminderTime = '16:00';
      const makeTime = '16:30';

      switch (currentMoment){
        case brewReadyTime:
          session.send(textContent.brewReadyPhrase);
          break;
        case brewOverTime:
          session.send(textContent.brewOverPhrase);
          break;
        case reminderTime:
          session.send(textContent.makeCoffeePhrase);
          break;
        case makeTime:
          session.send(textContent.reminderPhrase);
          break;
      }
    }

    
});
