/* 
1. Computer selects a letter.
2. User selects a letter
3. If userLetter === randomLetter userWins++
4. Else user losses++
5. 10 chances to guess, then restarts with +1 loss.
6. After wins, restarts with +1 win. 
*/



// Alphabet array 
var randomLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Variables to hold stats
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guesses = [];


// The computer "thinks of" a letter...
var computerChoice;

function chooseRandomLetter() {
    // The computer "thinks of" a letter...
    computerChoice = randomLetter[Math.floor(Math.random() * randomLetter.length)];
    // ...and we log it to the console.
    console.log("Computer Choice: " + computerChoice);
}

chooseRandomLetter();

// The user guesses a letter.
document.onkeyup = function () {



    // We create a variable called userGuess w/ value of the key that has just been released, made into a string, and converted to lowercase. 
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
    // We log it to the console as well.
    console.log("User Guess: " + userGuess);
   
    // We push that guess to the guesses array.
    guesses.push(userGuess);
   

    // Subtracts from 10 starting guesses
    do {
        guessesLeft--;
    } while ("guessesleft" > 0);

    // logic for wins/losses  
    if (userGuess === computerChoice) {
        wins++; 
        // Computer selects new letter logs it to the console. // Reset guesses 
    } else if (userGuess !== computerChoice && guessesLeft === 0) {
        losses++;
    } 


    // Just for now to make sure else if is working
    if (guessesLeft === -1){
        location.reload();
    
    }

    

    // Logging wins/losses to the console.
    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
    console.log("Guesses: " + guesses);
    console.log("Guesses left: " + guessesLeft);

    document.getElementById("wins").innerHTML = ("Wins: " + wins);

    document.getElementById("losses").innerHTML = ("Losses: " + losses);

    document.getElementById("guesses").innerHTML = ("Guesses so far: " + guesses);

    document.getElementById("guessesLeft").innerHTML = ("Guesses left: " + guessesLeft);


}

