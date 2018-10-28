var Letter = require("./letter.js");

var Word = function (word) {

  // Array to hold the letters of a word
  this.word = word;
  // Current word selected
  this.displayArr = [];
  //Links the word and pulls the letters out to turn it into an array
  for (let i = 0; i < word.length; i++) {
    var letters = word[i];
    var nextLetter = new Letter(letters, false);
      var letterArr = nextLetter.charSwap();
    this.displayArr.push(letterArr);
  }
  // Swaps the characters out from the letter to an underscore
  this.charSwap = function () {
    var stringArray = [];

    for (let i = 0; i < this.displayArr.length; i++) {
      var lettersList = this.displayArr[i];
      stringArray.push(lettersList);
    }
    var displayWord = stringArray.join(" ")
    console.log(displayWord);
  }
  // function to check letters and call the checkGuess couldn't get it to work though =(
    //I think I may have skipped someting in the object creation process something that would
    // allow me to be able to call the checkGuess function on the letter constructor
  this.checkGuessedLetter = function (guess) {
    
    if(this.char === guess)
    {
      // guess.checkGuess();
    }
  }

}
module.exports = Word;