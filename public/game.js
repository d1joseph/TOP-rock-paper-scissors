// game.js
let reset = false;
let playerDisplay = document.getElementById('player');
let message = document.querySelector('.display__message');

let renderPlayerSelection = (buttonId) => {
    // render appropriate image by id i.e. 'rock' renders rock.svg
    switch (buttonId) {
        case 'rock':
            playerDisplay.src = '../assets/dark/rock.svg';
            message.innerHTML = buttonId;
            break;
        case 'paper':
            playerDisplay.src = '../assets/dark/paper.svg';
            message.innerHTML = buttonId;
            break
        case 'scissors':
            playerDisplay.src = '../assets/dark/scissors.svg';
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
