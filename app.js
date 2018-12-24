const greenButton_div = document.getElementById('g');
const redButton_div = document.getElementById('r');
const yellowButton_div = document.getElementById('y');
const blueButton_div = document.getElementById('b');
const startButton_div = document.getElementById('start');
const result_p = document.querySelector(".result > p");
const computerArray = [];
const computerChoice = [];
const userArray = [];
let correctChoices = 0;
let gameLevel = 4;
let startTheGame = false;


function computerPlay() {
  while (computerArray.length < gameLevel) {
    let choice = Math.floor(Math.random() * 4);
    switch (choice) {
      case 0:
        computerArray.push('g');
        break;
      case 1:
        computerArray.push('r');
        break;
      case 2:
        computerArray.push('y');
        break;
      case 3:
        computerArray.push('b');
    }
  }
  return computerArray;
}

function userChoice(choice) {
  userArray.push(choice);
}

function endGame() {
  computerChoice.splice(0, computerChoice.length);
  correctChoices = 0;
  alert('Click start to try again.');
}

function win() {
  result_p.innerHTML = `Winner`;
}

function playGame() {
  while (userArray.length !== gameLevel) {
    if (userArray.length === gameLevel) {
      if (userArray === computerArray) {
        win();
      } else {
        endGame();
      }
    }
  }
}

function game(start) {
  if (start === "t") {
    computerPlay();
    playGame();
  }
}

function main() {
  greenButton_div.addEventListener('click', () => userChoice('g'));
  redButton_div.addEventListener('click', () => userChoice('r'));
  yellowButton_div.addEventListener('click', () => userChoice('y'));
  blueButton_div.addEventListener('click', () => userChoice('b'));
}

function startGame() {
  startButton_div.addEventListener('click', () => game("t"));
}

startGame();
main();
