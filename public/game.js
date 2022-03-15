// game.js

let hudMessage = document.querySelector('.message');
let playerScore = document.querySelector('score-player');
let machineScore = document.querySelector('score-machine');
let playerDisplay = document.getElementById('player');
let machineDisplay = document.getElementById('machine');


const symbols = [rock, paper, scissors];
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

let playerChoice = (buttonId) => {
    // check the button id and render corrosponding img
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
