/* 
1. Select a random letter (probably an array, assign numbers to letters or from a string?)
2. User selects a letter
3. If userLetter === randomLetter userWins++
4. Else user losses++
5. User guesses = userLetter
*/



// Alphabet array 
var randomLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Variables to hold stats
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guesses = [];

document.onkeyup = function () {

    // The computer "thinks of" a letter...
    var computerGuess = randomLetter[Math.floor(Math.random() * randomLetter.length)];
   
    // ...and we log it to the console.
    console.log("Computer Guess: " + computerGuess);


    (function usingGuesses() {
        guessesLeft--;
    })


    // The user guesses a letter.
        // We create a variable called userGuess w/ value of the key that has just been released, made into a string, and converted to lowercase. 
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
    // We log it to the console as well.
    console.log("User Guess: " + userGuess);
   
    // We push that guess to the guesses array.
    guesses.push(userGuess);
   


    // logic for wins/losses  
    if (userGuess === computerGuess) {
        wins++;
    } else if (userGuess !== computerGuess) {
        losses++;
    }

    // HOW DO I ALLOW A NUMBER OF GUESSES BEFORE RESTARTING?

    // Logging wins/losses to the console.
    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
    console.log("Guesses: " + guesses);


    document.getElementById("wins").innerHTML = ("Wins: " + wins);

    document.getElementById("losses").innerHTML = ("Losses: " + losses);

    document.getElementById("guesses").innerHTML = ("Guesses so far: " + guesses);

    
    document.getElementById("guessesLeft").innerHTML = ("Guesses left: " + guessesLeft);
}


