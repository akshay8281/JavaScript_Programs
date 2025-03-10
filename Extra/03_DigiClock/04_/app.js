let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
let restart = document.querySelector("#restartGame");

const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
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
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

// CHeck the user input data which is correct as per condition or not (lower = 1, higher = 100, abc)
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
    userInput.value = "";
  } else if (guess < 1) {
    alert("Please enter a number more than 1");
    userInput.value = "";
  } else if (guess > 100) {
    userInput.value = "";
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over, Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// Validation and check after print the Message
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("You Guessed it right");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Number is Too Low");
  } else if (guess > randomNumber) {
    displayMessage("Number is too high");
  }
}

// Update data of DOM Logic
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
  document.querySelector("#newGame").addEventListener("click", resetGame);
}

function newGame() {
  const newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener("click", function () {
    randomNumber = parseInt(Math.random() * 100 + 1);
    userInput.removeAttribute("disabled");
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    startOver.removeChild(p);
    displayMessage("");
    playGame = true;
  });
}
function resetGame() {
  randomNumber = parseInt(Math.random() * 100 + 1);
  prevGuess = [];
  numGuess = 1;
  guessSlot.innerHTML = "";
  remaining.innerHTML = "10";
  lowHigh.innerHTML = "";
  userInput.removeAttribute("disabled");
  startOver.removeChild(p);
  playGame = true;
}

restart.addEventListener("click", resetGame);