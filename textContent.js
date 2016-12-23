'use strict';
const emojis = {
  bow: `(bow)`,
  coffee: `(coffee)`,
  computer: `(computer)`,
  confused: `:^)`,
  holdon: `(holdon)`,
  wave: `(wave)`,
}

const addressUser = [
  `For you `,
  `Hey lookey lookey `,
  `This one's for you `,
  `With love to `,
]

const botInfo = `
	Coffeebot was brewed by Eric Gonzalo.
	For use in the Cold Brew Crew Skype chat.

	You can view the source code @ https://github.com/ersgonzalo/Coffeebot-Skype
	`;

const confusedList = [
  `Sorry, I don't understand that phrase yet...`,
  `Try a something else instead, I don't know this one. ${emojis.bow}`,
  `¯\\_(ツ)_/¯`,
  emojis.confused,
];

const coffeePasta = `What the coffee did you just coffee say about me, you little espresso? I’ll have you know I graduated top of my class in the Coffee Shop, and I’ve been involved in numerous secret raids on Columbia, and I have over 300 confirmed harvests. I am trained in organic brewing and I’m the top barista in the entire US Barista Forces. You are nothing to me but just another coffee wand. I will filter you out with precision the likes of which has never been seen before on this Earth, mark my coffee words. You think you can get away with saying that bean to me over the Internet? Think again, coffee-er. As we speak I am contacting my secret network of Baristas across the USA and your taste buds are being traced right now so you better prepare for the bitterness, maggot. The roast that wipes out the pathetic little thing you call your tongue. You’re coffee dead, kid. I can be anywhere, anytime, and I can roast you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in espresso preparation, but I have access to the entire arsenal of the United States Barista Corps and I will use it to its full extent to wipe your miserable taste buds off the face of the continent, you little frappuccino. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your coffee tongue. But you couldn’t, you didn’t, and now you’re paying the price, you unroasted roast. I will drip coffee fury all over you and you will drown in it. You’re coffee dead, kiddo.`

const greetingList = [
  `Hey, how're you doing today? I'm Coffeebot! ${emojis.coffee}`,
  `Nice to meet you! I'm Coffee Coffeebot! ${emojis.coffee}`,
  `Hello! I'm Coffeebot! ${emojis.coffee}`,
  `${emojis.coffee} ${emojis.wave} ${emojis.coffee}`,
];

const magicEightBall = [
  `It is certain.`,
  `It is decidedly so.`,
  `Without a doubt.`,
  `Yes, definitely.`,
  `You may rely on it.`,
  `As I see it, yes.`,
  `Most likely.`,
  `Outlook good.`,
  `Yes.`,
  `Signs point to yes.`,
  `Reply hazy try again.`,
  `Ask again later.`,
  `Better not tell you now.`,
  `Cannot predict now.`,
  `Concentrate and ask again.`,
  `Don't count on it.`,
  `My reply is no.`,
  `My sources say no.`,
  `Outlook not so good.`,
  `Very doubtful.`,
  coffeePasta
]

const randomCoffeeFact = [
  `You don’t need coffee when you first wake up. \nYour body naturally produces a hormone called cortisol that helps you feel alert and awake. That is released according to your circadian rhythm, dictated by the time of the day. So, if you have a habit of drinking coffee when you first wake up, you may want to wait a bit longer so that your caffeine isn’t wasted during a time when cortisol is at its highest.`,
  `Coffee isn’t actually that dehydrating. \nGreat news! Caffeine was once thought to be a significant diuretic, but that’s actually not true. Unless it’s consumed in large quantities (more than 500 to 600 mg a day, or two coffees) there aren’t such negative effects. In fact, studies have shown that urine output isn’t significantly changed when a person drinks a caffeinated beverage, rather than something non-caffeinated like water. So, as long as you enjoy your coffee in moderation, there’s not much to worry about.`,
  `Like most great discoveries, coffee’s magical powers were first realized through the majesty of crazy goats. \nAccording to legend, Ethiopian shepherds first realized the profound caffeinating effects of coffee when they noticed their goats started “dancing” after eating coffee berries.`,
  `Coffee can help you live a longer and healthier life. \nCoffee contains lots of antioxidants (it's the biggest source of antioxidants in an average Western diet!) that help the body fight chemicals called “free radicals.” As a result, coffee drinkers are at a lower risk of diseases such as Parkinson’s Disease, Type II Diabetes, and Heart Disease. Here’s the thing, though: coffee drinkers are also more likely to have unhealthy habits such as smoking cigarettes, drinking alcohol heavily, and eating red meat, so the study shown above has been adjusted to show what could happen if these other factors weren’t in effect.`,
  `Coffee contains important nutrients you need to survive. \nA single cup of coffee contains 11% of the daily recommended amount of Riboflavin (vitamin B2), 6% of Pantothenic Acid (vitamin B5), 3% of Manganese and Potassium, and 2% of Niacin and Magnesium.`,
  `Drinking coffee can help you burn fat. \nStudies have shown that drinking caffeine can increase your metabolism 3 to 11%. It’s one of the few chemicals that can actually help with fat burning, so might as well drink up!`,
  `All of the coffee grown on the planet is from an area called “The Coffee Belt.” \nThe Coffee Belt contains all of the regions that have the conditions needed for coffee growing. Since the plants clearly require lots of sunshine and warmth, it’s pretty easy to say that this belt makes a good outline for the best tropical vacations, too!`,
  `Iced coffee is more expensive because it uses more resources. \nFrom plastic cups to napkins to double brewing (re-brewing coffee a second time to make it stronger), the resources needed for iced coffee are more numerous (and expensive!) than hot coffee is. All of that adds up, and it causes establishments to charge more for their iced drinks than their hot-beverage counterparts.`,
  `Caffeine is actually crystals. \nThe buzz you feel after drinking coffee is actually from ingesting tiny 0.0016-inch crystals of caffeine. So small, yet so energizing!`,
  `Coffee is a red berry before it’s a bean. \nThose berries you see right there? Those are coffee berries. They grow on trees!`,
  `Caffeine starts working quickly. \nIt only takes ten minutes to start feeling the effects of caffeine after you take a sip of coffee, so drink up!`,
  `Coffee can help prevent Alzheimer’s and dementia. \nSeveral studies have shown that coffee drinkers are up to 65% less likely to get Alzheimer’s Disease, which is a leading cause of dementia.`,
  `Black Ivory coffee is the most expensive kind of coffee on Earth, and it’s made from poop. \nThe most expensive coffee in the world is made from elephant dung, and it’s called Black Ivory coffee. It costs $50 per cup. Luwak, aka civet, coffee is made by feeding coffee beans to mongoose and then using its feces. It costs $160 per pound.`,
  `Coffee is good for your liver. \nPeople who drink four cups of coffee a day are 80% less likely to develop cirrhosis, a condition that develops from several diseases affecting the liver.`,
  `The first webcam in the world was made for coffee. \nIn 1991, a group of Cambridge University scientists set a camera on their work building’s coffee pot, streaming the footage live on the web so that they would be able to see if the pot was empty or not, saving themselves the disappointment of a coffee-less trip. The picture above is the actually from that first camera.`,
  `Coffee houses were banned in England because that's where all the cool kids were drinking. \nOkay, kind of. In 1675 King Charles II banned coffee shops because he thought that that’s where people were meeting to conspire against him.`,
  `Caffeine improves your performance when working out. \nCaffeine increases your levels of adrenaline, and releases fatty acids from fat tissues, leading to a better physical performance by those who consume caffeine before working out.`,
  `Sourced from here: http://distractify.com/old-school/2015/05/27/reasons-why-you-should-be-drinking-coffee-right-now-1197926615`
];

const botPhrases = {
  botInfo: botInfo,
  brewReadyPhrase: `Looks like the coffee should be ready now, did you guys remove it from the fridge?`,
  brewOverPhrase: `We're going into overtime! You okay with the coffee tasting a bit darker?`,
  makeCoffeePhrase: `It's time to make coffee! Get your grinders and beans lads!`,
  reminderPhrase: `Have you guys made coffee yet? If not, make it now!`,
  coffeeMeStart: `How would you like coffee-related assistance? Your options are: \n 1. Next coffee. \n 2. Dead`,
  confused: confusedList,
  generalHelp: `How can I help you? ${emojis.holdon}`,
  greeting: greetingList,
  inProgress: `This command is currently in process, please try again later!`,
  menuPhrase: `Coffee commands that are available anytime:\n
	${emojis.coffee} coffee me - Suprise!
	${emojis.coffee} Do I want coffee? - I don't know, do you?
	${emojis.coffee} goodbye - End this conversation.
	${emojis.coffee} greeting - I greet you.
	${emojis.coffee} help/menu - Shows a list of commands.
	${emojis.coffee} info - Gives info behind this bot.
	${emojis.coffee} magic coffee ball, (Your question)? - Emulates a magic 8 ball.
	${emojis.coffee} timings - Shows when you will get your reminders.
	${emojis.coffee} random fact - Shows a random coffee fact.`,
  morning: `Good morning coffee drinkers!`,
  evening: `Have a good night, see you in the morning for more coffee!`,
  onAdded: `Hello %s... Thanks for adding me. Say menu or help to access a list of commands-coffee.`,
  yesWantCoffee: `Yes, you do want some, get some now or wait for the cold brew to finish!`,
  noWantCoffee: `No, probably not. Caffeine might affect you if you drink more now.`,
};

module.exports = {
  addressUser: addressUser,
  botPhrases: botPhrases,
  magicEightBall: magicEightBall,
  randomCoffeeFact: randomCoffeeFact,
};
