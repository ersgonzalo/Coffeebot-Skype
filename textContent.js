const emojis = {
	coffee: '(coffee)',
}

const randomCoffeeFact = [
	"You don’t need coffee when you first wake up.",
	"Coffee isn’t actually that dehydrating.", 
	"Like most great discoveries, coffee’s magical powers were first realized through the majesty of crazy goats.",
	"Coffee can help you live a longer and healthier life.",
	"Coffee contains important nutrients you need to survive.",
	"Drinking coffee can help you burn fat.",
	"All of the coffee grown on the planet is from an area called “The Coffee Belt.”",
	"Iced coffee is more expensive because it uses more resources.",
	"Caffeine is actually crystals.",
	"Coffee is a red berry before it’s a bean.",
	"Caffeine starts working quickly.",
	"Coffee can help prevent Alzheimer’s and dementia.",
	"Black Ivory coffee is the most expensive kind of coffee on Earth, and it’s made from poop.",
	"Coffee is good for your liver.",
	"The first webcam in the world was made for coffee.",
	"Coffee houses were banned in England because that's where all the cool kids were drinking.",
	"Caffeine improves your performance when working out.",
	"Sourced from here: http://distractify.com/old-school/2015/05/27/reasons-why-you-should-be-drinking-coffee-right-now-1197926615"
];

const BOT_PHRASES = {
	brewReadyPhrase: `Looks like the coffee should be ready now, did you guys remove it from the fridge?`,
	brewOverPhrase: `We're going into overtime! You okay with the coffee tasking a teeny bit darker?`,
	coffeeMeStart: `How would you like coffee-related assistance? Your options are: \n 1. Next coffee. \n 2. Dead`,
	confused: `Sorry I don't understand you...`,
	generalHelp: `How can I help you?`,
	greeting: `Hey, how are you? I'm Coffeebot! ${emojis.coffee}`,
	listCommands: '',
	makeCoffeePhrase: `It's time to make coffee! Get your grinders and beans lads!`,
	onAdded: `Hello %s... Thanks for adding me. Say 'Coffee Me' to see some great demos.`,
	reminderPhrase: `Have you guys made coffee yet? If not, make it now!`,
};

module.exports = {
	BOT_PHRASES: BOT_PHRASES,
	randomCoffeeFact: randomCoffeeFact
};


