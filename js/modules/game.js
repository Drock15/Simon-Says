import Main from "./main.js";

const Game = (_ => {
  let level = 4;

  const $main = document.querySelector(".main");

  const computerPlay = _ => {
    let randomSelection = Math.floor(Math.random() * 4);
    const collection = [];
    for (let i = 0; i < level; i++) {
      collection.push(randomSelection);
    }
  };

  const init = _ => {
    computerPlay();
  };

  return {
    init
  };
})();

export default Game;
