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

The user selects a letter (userGuess). It's stored in an array for previously guessed letters. After that, the computer uses an if/else statement to check if the userGuess matches the letter it's "thinking of" (computerChoice). If it matches, it adds a point to the "Wins" variable and resets the number of tries (guessesLeft) and the array for previously guessed letters (guesses). If not, after 8 more guesses, a point is added to the "Losses" variable, and the guessesLeft and guesses variables are reset.


Function for reset: 

    function resetGuesses() {
    // resets variables
    guesses = [];
    guessesLeft = 9;
    // "thinks of" a new letter
    chooseRandomLetter();
    }

Subtracts from 9 starting guesses:

    do {
        guessesLeft--;
    } while ("guessesLeft" > 0);
   
   
Logic for wins/losses:

    if (userGuess === computerChoice) {
        wins++; 
        resetGuesses();
        
Selects new letter logs it to the console. // Reset guesses:

    } else if (userGuess !== computerChoice && guessesLeft === 0) {
        losses++;
        resetGuesses();
    } 
    
    
