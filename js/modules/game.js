const Game = (_ => {

    const $main = document.querySelector('.main');

    const listeners = _ => {
        $main.addEventListener('click', event => {
            if (event.target.matches('p')) {
                checkColor(event.target.innerHTML);
            }
        })
    }

    const checkColor = color => {
        if (color === 'G'){
            console.log("You clicked green dog");
        }
        if (color === 'R'){
            console.log("You clicked red dog");
        }
        if (color === 'Y'){
            console.log("You clicked yellow dog");
        }
        if (color === 'B'){
            console.log("You clicked blue dog");
        }
    }

    const init = _ => {
        listeners();
    }

    return {
        init
    }
})();

export default Game;