# Psychic-Game
Here's my Psychic Game! Hope you enjoy!

# About the Psychic Game
Upon loading the page, the computer "thinks" of a letter and logs it to the console.
 
    function chooseRandomLetter() {
    // The computer "thinks of" a letter...
    computerChoice = randomLetter[Math.floor(Math.random() * randomLetter.length)];
    // ...and we log it to the console.
    console.log("Computer Choice: " + computerChoice);
    }

The user selects a letter and it's stored in an array for previously guessed letters. Then, the computer checks to see if that letter is the same as the letter it's "thinking of" (computerChoice) with an if/else statement. If it matches, it adds a point to the "Wins" variable and resets the number of tries and the array for previously guessed letters. If not, after 9 guesses, a point is added to the "Losses" variable" and resets the number of tries and the array for previously guessed letters.


Function for reset: 

    function resetGuesses() {
    guesses = [];
    guessesLeft = 9;
    chooseRandomLetter();
    }

Subtracts from 9 starting guesses:

    do {
        guessesLeft--;
    } while ("guessesleft" > 0);
   
   
Logic for wins/losses:

    if (userGuess === computerChoice) {
        wins++; 
        resetGuesses();
        
Selects new letter logs it to the console. // Reset guesses:

    } else if (userGuess !== computerChoice && guessesLeft === 0) {
        losses++;
        resetGuesses();
    } 
    
    
