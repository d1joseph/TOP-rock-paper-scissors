// game.js

// main game logic
const game = () => {
    let playerScore = 0;
    let machineScore = 0;
    let rounds = 0;

    // play game
    const playGame = () => {
        const rockBtn = document.querySelector(".rock");
        const paperBtn = document.querySelector(".paper");
        const scissorsBtn = document.querySelector(".scissors");
        const playerSymbols = [rockBtn, paperBtn, scissorsBtn];
        const machineSymbols = ['rock', 'paper', 'scissors'];

        playerSymbols.forEach(symbol => {
            symbol.addEventListener('click', function(){
                
                // display number of decrementing rounds left
                const roundsLeft = document.querySelector('.rounds-left');
                rounds++;
                roundsLeft.innerText = `Rounds left: ${10-rounds}`;

                // machine choice randint
                const randChoice = Math.floor(Math.random() * 3);
                const machineChoice = machineSymbols[randChoice];
                
                
                // determine winner
                winner(this.innerText, machineChoice);

                // calling gameOver after 10 rounds
                if (rounds == 10){
                    gameOver(playerSymbols, roundsLeft);
                }
            })
        })
    }

    // function to determine winner
    const winner = (player,machine) => {
        const outcomeMsg = document.querySelector('.outcome-msg');
        const playerScoreboard = document.querySelector('.player-scoreboard');
        const machineScoreboard = document.querySelector('.machine-scoreboard');
        player.toLowerCase();
        machine.toLowerCase();

        if(player === machine){
            outcomeMsg.textContent = 'Tie'
        }
        else if(player == 'rock'){
            if(machine == 'paper'){
                outcomeMsg.textContent = 'Machine wins.';
                machineScore ++;
                machineScoreboard.textContent = machineScore;
            }else{
                outcomeMsg.textContent ='Player wins.';
                playerScore++;
                playerScoreboard.textContent = playerScore;
            }
        }
        else if(player == 'scissors'){
            if(machine == 'rock'){
                outcomeMsg.textContent = 'Machine wins.';
                machineScore ++;
                machineScoreboard.textContent = machineScore;
            }else{
                outcomeMsg.textContent = 'Player wins.';
                playerScore ++;
                playerScoreboard.textContent = playerScore;
            }
        }
        else if(player == 'paper'){
            if(machine == 'scissors'){
                outcomeMsg.textContent = 'Machine wins.';
                machineScore ++;
                machineScoreboard.textContent = machineScore;
            }else{
                outcomeMsg.textContent = 'Player wins.';
                playerScore ++;
                playerScoreboard.textContent = playerScore;
            }
        }
    }

    // game over
    const gameOver = (playerSymbols, roundsLeft) => {
        const chooseMove = document.querySelector('.move');
        const outcomeMsg = document.querySelector('.outcome-msg');
        const reloadBtn = document.querySelector('.reload-btn');

        playerSymbols.forEach(symbol => {
            symbol.style.display = 'none';
        })

        if (playerScore > machineScore){
            outcomeMsg.style.fontSize = '2rem';
            outcomeMsg.innerText = 'You win!';
            outcomeMsg.style.color = '#308D46';
        }
        else if(playerScore < machineScore){
            outcomeMsg.style.fontSize = '2rem';
            outcomeMsg.innerText = 'You lost.';
            outcomeMsg.style.color = 'red';
        }
        else{
            outcomeMsg.style.fontSize = '2rem';
            outcomeMsg.innerText = 'Tie game -.-';
            outcomeMsg.style.color = 'grey';
        }
        reloadBtn.addEventListener('click', () =>{
            window.location.reload();
        })
    }

    playGame()
}
game();

/* To do:
    * gameOver() function added
    * integrate anime.js library 
    * animate symbols selections to display in .column element 
    * Add reload button and reload() function to reset the game - DONE
    * styling and layout update
    * add button wrapper with symbol imgs to button elements
    * mobile optimisation
    * testing
*/
