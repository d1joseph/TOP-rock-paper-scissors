// game.js
let cascadeLoad = false;
const symbols = {
    'rock':'../assets/dark/rock.svg',
    'paper':'../assets/dark/paper.svg',
    'scissors':'../assets/dark/scissors.svg',
};

let reset = false; // resets the game if true
let round; // round counter
let message = document.querySelector('.display__message'); // outputs the evaluated outcome

// symbol image elements
const player1 = document.getElementById('player');
const player2 = document.getElementById('machine');
// scores
let player1Score = document.getElementById('.player-1__score');
let player2Score = document.getElementById('.player-2__score');


let Play = (buttonId) => {
    // render appropriate image by id i.e. 'rock' renders rock.svg
    switch (buttonId) {
        case 'rock':
            // p1
            player1.src = symbols.rock;
            player1.alt = `Player 1 throws...${buttonId}!`
            
            // p2
            player2.src = '../assets/dark/rock.svg';
            player2.alt = `Player 2 throws...${buttonId}!`
            
            message.innerHTML = buttonId;
            break;

        case 'paper':
            // p1
            player1.src = symbols.paper;
            player1.alt = `Player 1 throws...${buttonId}!`
            // p2
            player2.src = '../assets/dark/paper.svg';
            player2.alt = `Player 2 throws...${buttonId}!`
            
            message.innerHTML = buttonId;
            break
            
        case 'scissors':
            // p1
            player1.src = symbols.scissors;
            player1.alt = `Player 1 throws...${buttonId}!`
            // p2
            player2.src = '../assets/dark/scissors.svg';
            player2.alt = `Player 2 throws...${buttonId}!`
            
            message.innerHTML = buttonId;
            break
    }
};

// random choice select method

// game loop
    
    
// restart game
document.getElementById('reset-btn').addEventListener('click',function(){
    // returns bool based on user input
    reset = confirm('Press OK to restart\nPress Cancel to keep playing');

    // if user wants to reset, page is reloaded
    if (reset) {
        location.reload();
    }
});
