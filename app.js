const greenButton_div = document.getElementById('g');
const redButton_div = document.getElementById('r');
const yellowButton_div = document.getElementById('y');
const blueButton_div = document.getElementById('b');
const startButton_div = document.getElementById('start');
const result_p = document.querySelector(".result > p");
const userArray = [];
const computerArray = [];
const computerChoice = [];
let correctChoices = null;
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

function userPlay(userChoice) {
  userArray.push(userChoice);
}

function win() {
  result_p.innerHTML = `Winner`;
}

function lose() {
  result_p.innerHTML = `Loser`;
}

function game(start) {
  if (start === "t") {
    computerPlay();
  }
  if (userArray === computerArray) {
    win();
  } else {
    lose();
  }
}

function main() {
  greenButton_div.addEventListener('click', () => main('g'));
  redButton_div.addEventListener('click', () => main('r'));
  yellowButton_div.addEventListener('click', () => main('y'));
  blueButton_div.addEventListener('click', () => main('b'));
}

function startGame() {
  startButton_div.addEventListener('click', () => game("t"));
}

startGame();
