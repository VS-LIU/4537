// import { Button } from './button.js'
// import { Game } from './game.js'
// import { TextBox} from './textbox.js'

/**  
 * COMP4537 - Lab 0
 * Name: Victor Liu #A00971668 - Set C
 * Date: 2024-09-08
*/ 

let currentGame = null; //ChatGPT provided how to instantiate a "null" instance

const newGameButton = document.querySelector('#new-game-button');


// add event listener for go button
newGameButton.addEventListener("click", () => {
    console.log("Go button clicked!");
    console.log("Value entered: ", document.querySelector('#box-quantity-input').value); 
    if (checkGameInstanceIsActive(currentGame)) {
        const ResetNewGame = confirm("Start a new game?");
        if (ResetNewGame) {
            currentGame.endCurrentGame();
            const numButtons = parseInt(document.querySelector('#box-quantity-input').value);
            currentGame = new Game();
            currentGame.startNewGame(numButtons);
        }
        else {
            return;
        }

    } else {
        console.log("Starting a new game!");
        const numButtons = parseInt(document.querySelector('#box-quantity-input').value);
        currentGame = new Game();
        // currentGame.removeCurrentButtons();
        currentGame.startNewGame(numButtons);
    }
});

// helper function to check game instance
function checkGameInstanceIsActive(game) {
    if (game instanceof Game) {
        return true;
    } else {
        return false;
    }
}

