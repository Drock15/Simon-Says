const greenButton_div = document.getElementById('g');
const redButton_div = document.getElementById('r');
const yellowButton_div = document.getElementById('y');
const blueButton_div = document.getElementById('b');
const userArray = [];
const computerArray = [];
const computerChoice = [];
let correctChoices = 0;
let gameLevel = 4;


function startGame() {
  computerPlay();
  
}

function computerPlay() {
  while (computerChoice.length < gameLevel) {
    let choice = Math.floor(Math.random() * 4);
    switch (choice) {
      case 0:
        computerChoice.push('g');
        break;
      case 1:
        computerChoice.push('r');
        break;
      case 2:
        computerChoice.push('y');
        break;
      case 3:
        computerChoice.push('b');
    }
  }
}

function game() {
  
}
