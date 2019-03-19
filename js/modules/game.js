import Main from "./main.js";

const Game = (_ => {
  let level = 4;
  const computerColorSelction = [];

  const $greenBtn = document.querySelector(".green");
  const $redBtn = document.querySelector(".red");
  const $yellowBtn = document.querySelector(".yellow");
  const $blueBtn = document.querySelector(".blue");

  const randomNumberGenerator = _ => {
    let randomSelection = Math.floor(Math.random() * 4);

    return randomSelection;
  };
  const computerPlay = _ => {
    for (let i = 0; i < level; i++) {
      computerColorSelction.push(randomNumberGenerator());
    }
  };

  const ComputerSelectionDOM = _ => {
    computerPlay();
    for (let i = 0; i < computerColorSelction.length; i++) {
      setTimeout(() => {
        if (computerColorSelction[i] === 0) {
          $greenBtn.classList.add("green-glow");
          setTimeout(() => $greenBtn.classList.remove("green-glow"), 300);
        }
        if (computerColorSelction[i] === 1) {
          $redBtn.classList.add("red-glow");
          setTimeout(() => $redBtn.classList.remove("red-glow"), 300);
        }
        if (computerColorSelction[i] === 2) {
          $yellowBtn.classList.add("yellow-glow");
          setTimeout(() => $yellowBtn.classList.remove("yellow-glow"), 300);
        }
        if (computerColorSelction[i] === 3) {
          $blueBtn.classList.add("blue-glow");
          setTimeout(() => $blueBtn.classList.remove("blue-glow"), 300);
        }
      }, i * 700);
    }
  };

  const init = _ => {
    ComputerSelectionDOM();
  };

  return {
    init
  };
})();

export default Game;
