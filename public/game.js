// game.js

// game logic
const game = () => {
    let playerScore = 0;
    let machineScore = 0;
    let rounds = 5;

    // start here
    const playGame = () => {
        const rockBtn = document.querySelector(".rock");
        const paperBtn = document.querySelector(".paper");
        const scissorsBtn = document.querySelector(".scissors");
        const playerSymbols = [rockBtn, paperBtn, scissorsBtn];
        const machineSymbols = ['rock', 'paper', 'scissors'];

        // main game loop
        playerSymbols.forEach(symbol => {
            symbol.addEventListener('click', function(){
                
                // display rounds remaining
                const roundsLeft = document.querySelector('.rounds-left');
                rounds++;
                roundsLeft.innerText = `Rounds left: ${10-rounds}`;

                // machine random choice
                const randChoice = Math.floor(Math.random() * 3);
                const machineChoice = machineSymbols[randChoice];
                const machineIcon = document.getElementById('machine');
                
                // set the icon img element == to the machine choice
                if (machineChoice === 'rock') {
                    machineIcon.src = '/assets/light/fist-icon.svg';
                    
                } else if (machineChoice === 'paper') {
                    machineIcon.src = '/assets/light/paper-icon.svg';
                    
                } else if (machineChoice === 'scissors') {
                    machineIcon.src = '/assets/light/scissors-icon.svg';
                    
                }
                
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

        // tie
        if(player === machine){
            outcomeMsg.textContent = 'Tie'
        }
        // rock > paper
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
        // rock > scissors
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
        // scissors > paper 
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
        const reloadBtn = document.querySelector('.replay-btn');

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
    * styling and layout update
    * add button wrapper with symbol imgs to button elements
    * mobile optimisation
    * testing
*/
