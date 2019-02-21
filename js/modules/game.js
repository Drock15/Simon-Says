const Game = (_ => {

    const $main = document.querySelector('.main');
    const $greenButton =document.querySelector('.green');
    const $redButton =document.querySelector('.red');
    const $yellowButton =document.querySelector('.yellow');
    const $blueButton =document.querySelector('.blue');

    const listeners = _ => {
        $main.addEventListener('click', event => {
            if (event.target.matches('p')) {
                checkColor(event.target.innerHTML);
            }
        })
    }

    const checkColor = color => {
        if (color === 'G'){
            buttonGlow(color);
        }
        if (color === 'R'){
            buttonGlow(color);
        }
        if (color === 'Y'){
            buttonGlow(color);
        }
        if (color === 'B'){
            buttonGlow(color);
        }
    }

    const buttonGlow = color => {
        if (color === 'G') {
            $greenButton.classList.add('green-glow');
            setTimeout(() => $greenButton.classList.remove('green-glow'), 300);
        }
        if (color === 'R') {
            $redButton.classList.add('red-glow');
            setTimeout(() => $redButton.classList.remove('red-glow'), 300);
        }
        if (color === 'Y') {
            $yellowButton.classList.add('yellow-glow');
            setTimeout(() => $yellowButton.classList.remove('yellow-glow'), 300);
        }
        if (color === 'B') {
            $blueButton.classList.add('blue-glow');
            setTimeout(() => $blueButton.classList.remove('blue-glow'), 300);
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