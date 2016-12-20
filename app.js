'use strict';
//Node Modules
const restify = require('restify');
const builder = require('botbuilder');


//My Modules and Settings
const settings = require('./settings.js');

//=========================================================
// Bot Setup
//=========================================================

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 8080, function () {
   console.log('%s listening to %s', server.name, server.url);
});

// Create chat bot
var connector = new builder.ChatConnector({
    appId: settings.appId,
    appPassword: settings.appPassword
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

//Bot on
bot.on('contactRelationUpdate', function (message) {
    if (message.action === 'add') {
        var name = message.user ? message.user.name : null;
        var reply = new builder.Message()
                .address(message.address)
                .text("Hello %s... Thanks for adding me. Say 'hello' to see some great demos.", name || 'there');
        bot.send(reply);
    } else {
        // delete their data
    }
});

bot.on('typing', function (message) {
  // User is typing
  message.send(`I see you're typing something, is it cold brew related?`);
});

bot.on('deleteUserData', function (message) {
    // User asked to delete their data
});

//=========================================================
// Bots Dialogs
//=========================================================

String.prototype.contains = function(content){
  return this.indexOf(content) !== -1;
}

bot.dialog('/', function (session) {
    let textConverted = session.message.text.toLowerCase();
    
    if(textConverted.contains('greetings')){
      session.send(`Hey, how are you?`);
      }else if(textConverted.toLowerCase().contains('help')){
        session.send(`How can I help you?`);
      }else{
        session.send(`Sorry I don't understand you...`);
      }
});