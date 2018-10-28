// NPM package requires
var inquirer = require("inquirer");
// Constructor export file variable
var Word = require("./word.js");
// Word guess array
var wordList = [
  "halloween",
  "leather face",
  "chucky",
  "jason",
  "freddy",
  "hannibal",
  "jigsaw",
  "pennywise",
  "xenomorph",
  "jeff the killer",
  "slenderman",
  "the conjuring",
  "the strangers",
  "american horror story",
  "mist",
  "the happening",
];
// Various Variables
var guessesRemaining = 10;
var playerGuesses = [];
var currentWord;
// Starts Game

startGame();
// Logs out starting screen and then calls getWord function
function startGame() {
  console.log("-".repeat(60))
  console.log("Welcome to a horror movie themed word guessing game!");
  console.log("Can you guess the correct words before you run out of tries?");
  console.log("-".repeat(60))
  getWord();

}
// Uses the math.random on the wordlist array to aquire a word and push it to the
// Word constructor
function getWord() {
  var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
  var currentWord = new Word(randomWord);
  checkForLetters = currentWord.checkGuessedLetter()
  gameLoop();
}

//Ends the game and refreshes the guessesRemaining variable and deletes all
// player guessed letters from the last round
function endGame() {
  guessesRemaining = 10;
  playerGuesses = [];
  startGame();
}
// Main part of the game loops through the asking of chosing a letter until a proper one has been found
function gameLoop() {
  console.log(checkForLetters);
  inquirer.prompt
    ([
      {
        type: "input",
        message: "Choose a letter!",
        name: "getLetter"
      }
    ]).then(function (guess) {
      //Checks if the input is equal to current word and is not in player guess
      if (guess.getLetter === checkForLetters && !playerGuesses) {
        //Tried to see if this would check if the word had no more _ in it it would call the game
        //Obviously didnt work
        if (currentWord != "_") {
          console.log("Yay you win!");
        }
        console.log("Correct!");
        playerGuesses.push(guess.getLetter);
        console.log(`\nGuesses Left: ${guessesRemaining}`)
        console.log(`\nCurrent Guessed Letters: ${playerGuesses}`);
        gameLoop();
      }
      else if (guess.getLetter != checkForLetters) {
        if (guessesRemaining != 0) {
          console.log("\nOh no thats not right.")
          guessesRemaining--;
          gameLoop();
          playerGuesses.push(guess.getLetter);
          console.log(`\nGuesses Left: ${guessesRemaining}`)
          console.log(`\nCurrent guessed letters ${playerGuesses}`);
        } else {
          endGame();
        }
      } else {
        console.log("Guesses Left:" + guessesRemaining);
        console.log(`\nCurrent guessed letters ${playerGuesses}`);
        console.log("You already chose that letter!");
        gameLoop();
      }
    });
}

