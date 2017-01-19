Coffeebot
===
Guided via Usama Tahir's [Medium Article](https://medium.com/@AmJustSam/how-to-build-skype-bot-with-nodejs-ddec8372114c#.ohjeqbprd).  
Built with Microsoft's [Botbuilder](https://github.com/Microsoft/BotBuilder) and [Bot Framework](https://dev.botframework.com/) along with Node.js.

![Demo of Bot](Demo Image.PNG)

Currently used in Indiepay's Cold Brew Crew chat to keep track of our cold brewing coffee and other coffee-related interests.

Setup
-----
1. `npm install`
2. Create your own settings.js at the root for the config of the FTP:
	```json
	'use strict';
	const MICROSOFT_BOT_SETTINGS = {
	  //Application Settings
	  appId: "app-id-from-microsoft",
	  appPassword: "app-password-from-microsoft",
	  giphyKey: "your-giphy-api-key",

	  //User Defined Reminder Times
	  brewReadyTime: '10:30',
	  brewOverTime: '11:00',
	  reminderTime: '16:30',
	  makeTime: '17:00',

	  //Greeting Booleans
	  isBrewReady: false,
	  isBrewOver: false,
	  isMakeOver: false,
	  isReminder: false,
	  hasGreetedMorning: false,
	  hasGreetedEvening: false,
	};

	module.exports = MICROSOFT_BOT_SETTINGS;

	```
3. `node app`
4. `ngrok http 8080` to create a tunnel to test your bot locally
5. Make sure you have your bot setup on the botframework site.
6. Add your bot on Skype or test it on the Botframework web chat!