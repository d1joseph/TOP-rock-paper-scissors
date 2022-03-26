// game.js
let reset = false;
let message = document.querySelector('.display__message');
const player1 = document.getElementById('player');
const player2 = document.getElementById('machine');

let renderPlayerSelection = (buttonId) => {
    // render appropriate image by id i.e. 'rock' renders rock.svg
    switch (buttonId) {
        case 'rock':
            // p1
            player1.src = '../assets/dark/rock.svg';
            player1.alt = `Player 1 throws...${buttonId}!`
            // p2
            player2.src = '../assets/dark/rock.svg';
            player2.alt = `Player 2 throws...${buttonId}!`
            
            message.innerHTML = buttonId;
            break;
        case 'paper':
            // p1
            player1.src = '../assets/dark/paper.svg';
            player1.alt = `Player 1 throws...${buttonId}!`
            // p2
            player2.src = '../assets/dark/paper.svg';
            player2.alt = `Player 2 throws...${buttonId}!`
            
            message.innerHTML = buttonId;
            break
        case 'scissors':
            // p1
            player1.src = '../assets/dark/scissors.svg';
            player1.alt = `Player 1 throws...${buttonId}!`
            // p2
            player2.src = '../assets/dark/scissors.svg';
            player2.alt = `Player 2 throws...${buttonId}!`
            
            message.innerHTML = buttonId;
            break
    }
};

// game loop

    // set rounds to play chosen by user; 3, 5, 10
    // get player selection
    // randomly generate machine selection
    // start countdown + reveal in displays
    // evaluate outcome on reveal
    // update scores
    // check rounds left
    // evaluate game loop. Stop if no rounds left, continue otherwise
    // if game is over declare winner

    
// restart game
document.getElementById('reset-btn').addEventListener('click',function(){
    // returns bool based on user input
    reset = confirm('Press OK to restart\nPress Cancel to keep playing');

    // if user wants to reset, page is reloaded
    if (reset) {
        location.reload();
    }
});
