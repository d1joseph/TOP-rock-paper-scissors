// game.js
let reset = false;
let playerDisplay = document.getElementById('player');

let renderPlayerSelection = (buttonId) => {
    // render appropriate image by id i.e. 'rock' renders rock.svg
    switch (buttonId) {
        case 'rock':
            playerDisplay.src = '../assets/dark/rock.svg';
            break;
        case 'paper':
            playerDisplay.src = '../assets/dark/paper.svg';
            break
        case 'scissors':
            playerDisplay.src = '../assets/dark/scissors.svg';
            break
    }
};

// restart game
document.getElementById('reset').addEventListener('click',function(){
    // returns bool based on user input
    reset = confirm('Press OK to restart\nPress Cancel to keep playing');
    console.log(reset);

    // if user wants to reset, page is reloaded
    if (reset) {
        location.reload();
    }
});


