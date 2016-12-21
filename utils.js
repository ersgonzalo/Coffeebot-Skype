function randomPhraser(phraseArray){
	let randomIndex = parseInt(Math.random() * phraseArray.length);
  return phraseArray[randomIndex];
}

module.exports = {
	randomPhraser: randomPhraser,
};