"use strict";

const randomNumFunc = (min, max) => {
	let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
	return randomNum;
};

const randomNum = randomNumFunc(1, 10);

function guessingGame() {
	let numberToGuess = randomNum;
	let tries = 1;
	let guess = parseInt(prompt("Guess a number 1-10."));

	while (guess !== numberToGuess && tries < 3) {
		guess = parseInt(prompt("Wrong. Try again."));
		tries++;
	}

	if (guess === numberToGuess && tries <= 3) {
		alert(`Bravo!! You won, it took you: ${tries} attempt(s)`);
	} else {
		alert(`Sorry, game over. The number was ${numberToGuess}!`);
	}
}

guessingGame();
