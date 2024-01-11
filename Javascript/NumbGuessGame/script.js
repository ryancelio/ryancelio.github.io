const Guess = document.getElementById("Guess");
const StartGame = document.getElementById("StartGame");
const rightOrNot = document.getElementById("HoLDisplay");
const PreGame = document.getElementById("PreGame");
const Game = document.getElementById("Game");
const Restart = document.getElementById("Restart");
const guessesLabel = document.getElementById("guessesLabel");
const guessNumberDisp = document.getElementById("Guesses");
let diff = document.getElementById("difficulty");

let number;
let numbToGuess;
let guesses = 0;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getNumbToGuess() {
  if (diff.value == 0) {
    numbToGuess = getRandomNumber(0, 20);
  } else if (diff.value == 1) {
    numbToGuess = getRandomNumber(0, 50);
  } else if (diff.value == 2) {
    numbToGuess = getRandomNumber(0, 100);
  } else {
    numbToGuess = 0;
  }
}
function beginGame() {
  PreGame.style.display = "none";
  Game.style.display = "block";
}
function restartGame() {}
StartGame.onclick = function () {
  getNumbToGuess();
  beginGame();
};
function reset_animation() {
  rightOrNot.style.animation = "none";
  rightOrNot.offsetHeight; /* trigger reflow */
  rightOrNot.style.animation = null;
}
Guess.onclick = function () {
  number = Number(document.getElementById("Number").value);
  if (number == numbToGuess) {
    guesses++;
    rightOrNot.className = "fa-solid fa-check fa-shake";
    reset_animation();
    guessNumberDisp.textContent = guesses;
    guessesLabel.style.display = "block";
    Guess.style.display = "none";
  } else if (number > numbToGuess) {
    guesses++;
    rightOrNot.className = "fa-solid fa-caret-down fa-shake";
    reset_animation();
  } else if (number < numbToGuess) {
    guesses++;
    rightOrNot.className = "fa-solid fa-caret-up fa-shake";
    reset_animation();
  }
};
Restart.onclick = function () {
  PreGame.style.display = "block";
  Game.style.display = "none";
  guessesLabel.style.display = "none";
  guesses = 0;
  Guess.style.display = "inline-block";
  rightOrNot.className = "";
};

// Mobile Navbar
const mobileNavAct = document.getElementById("mobileNavbarDrop");
const navBar = document.getElementById("navBarContent");

mobileNavAct.onclick = function () {
  if (navBar.style.display != "block") {
    navBar.style.display = "block";
  } else if (navBar.style.display == "block") {
    navBar.style.display = "none";
  }
};
