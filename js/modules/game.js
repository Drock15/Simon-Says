const Game = (_ => {

    const $main = document.querySelector('.main');

    const listeners = _ => {
        $main.addEventListener('click', event => {
            if (event.target.matches('.container__content-1')) {
                console.log('hello');
                checkColor(event.target.innerText);
            }
            if(event.target.matches('.container__content-2')) {
                checkColor(event.target.innerHTML);
            }
        })
    }

    const checkColor = color => {
        if (color === G){
            console.log("You clicked green dog")
        }
        if (color === R){
            
        }
        if (color === Y){

        }
        if (color === B){

        }
    }

    const init = _ => {
        listeners
    }

    return {
        init
    }
})();

export default Game;