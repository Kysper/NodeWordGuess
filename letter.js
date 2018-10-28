 var Letter = function (char,isGuessed)
{
  this.char = char;
    this.isGuessed = isGuessed;
    // Hides letter if isGuessed is false
    this.charSwap = function(){
    if(this.char === ' ')
    {
      this.isGuessed = true;
    }
    // Checks to see if the objects isGuessed bool is true or false 
    // and switches them appropriately
    if(this.isGuessed === true)
    {
        return this.char
    }
    else if (this.isGuessed === false)
    {
      return "_";
    }
  }
    // Checks if objects char is equal to user guess
  this.checkGuess = function(char)
  {
    if(this.char === char)
    {
      this.isGuessed = true;
    }
  };
};
module.exports = Letter;