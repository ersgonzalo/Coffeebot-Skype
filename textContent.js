'use strict';
const emojis = {
	coffee: `(coffee)`,
	computer: `(computer)`,
	holdon: `(holdon)`,
}

const addressUser = [
`For you `,
`Hey lookey `,
`With love to `,
]

const confusedList = [
	`Sorry I don't understand you...`,
	`Try a different command instead, I don't know this one.`,
	`:^)`
];

const greetingList = [
	`Hey, how're you doing today? I'm Coffeebot! ${emojis.coffee}`,
	`Nice to meet you! I'm Coffee Coffeebot! ${emojis.coffee}`,
	`Hello! I'm Coffeebot! ${emojis.coffee}`,
];

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
	brewReadyPhrase: `Looks like the coffee should be ready now, did you guys remove it from the fridge?`,
	brewOverPhrase: `We're going into overtime! You okay with the coffee tasting a bit darker?`,
	coffeeMeStart: `How would you like coffee-related assistance? Your options are: \n 1. Next coffee. \n 2. Dead`,
	confused: confusedList,
	generalHelp: `How can I help you? ${emojis.holdon}`,
	greeting: greetingList,
	inProgress: `This command is currently in process, please try again later!`,
	makeCoffeePhrase: `It's time to make coffee! Get your grinders and beans lads!`,
	menuPhrase: `Coffee commands that are available anytime:\n
	${emojis.coffee} coffee me - Suprise!
	${emojis.coffee} goodbye - End this conversation.
	${emojis.coffee} greeting - I greet you.
	${emojis.coffee} help - Shows a list of commands.
	${emojis.coffee} menu - Shows current menu.
	${emojis.coffee} timings - Shows when you will get your reminders.
	${emojis.coffee} random fact - Shows a random coffee fact.`,
	onAdded: `Hello %s... Thanks for adding me. Say menu or help to access a list of commands-coffee.`,
	reminderPhrase: `Have you guys made coffee yet? If not, make it now!`,
};

module.exports = {
	botPhrases: botPhrases,
	randomCoffeeFact: randomCoffeeFact,
	addressUser, addressUser
};


