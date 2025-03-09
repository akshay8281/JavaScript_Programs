const randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField").value;
const guesses = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowHigh = document.querySelector(".lowHigh");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

// store data of Previous Guesses
let prevGuess = [];
// No. of attempts
let numGuess = 1;

// it is must to start Game
let playGame = true;

if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault()
        const guess = parseInt()
    })
}



// CHeck the user input data which is correct asper condition or not
function validateGuess(guess) {
  //
}

// Validation and check after print the Message
function checkGuess(guess) {
  //
}

function displyGuess(guess){

}

function displyMessage(message) {
    // 
}

function endGame() {
    
}

function newGame() {
    
}

