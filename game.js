// game.js
// to do:
/*
1. write game.js
2. refactor for html dom
3. test game functions, score and outcomes
4. integrate anime.js
5. tests
*/

// main game logic
const game = () => {
    let playerScore = 0;
    let machineScore = 0;
    let rounds = 0;

    // play game
    const playGame = () => {
        const rockBtn = document.querySelector(".btn rock");
        const paperBtn = document.querySelector(".btn paper");
        const scissorsBtn = document.querySelector(".btn scissors");
        const playerSymbols = [rockBtn, paperBtn, scissorsBtn];
        const machineSymbols = ['rock', 'paper', 'scissors'];

        playersSymbols.forEach(symbol => {
            symbol.addEventListener('click', function(){
                
                // display number of decrementing rounds left
                const roundsLeft = document.querySelector('.rounds');
                rounds++;
                roundsLeft.innerText = `Rounds left: ${10-rounds}`;

                // machine choice randint -
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
        const result = document.querySelector('.outcome-msg');
        const playerScoreboard = document.querySelector('.player-scoreboard');
        const machineScoreboard = document.querySelector('.machine-scoreboard');
        player.toLowerCase();
        machine.toLowerCase();

        if(player === machine){
            result.textContent = 'Tie'
        }
        else if(player == 'rock'){
            if(machine == 'paper'){
                result.textContent = 'Machine wins.';
                machineScore ++;
                machineScoreboard.textContent = machineScore;
            }else{
                result.textContent ='Player wins.';
                playerScore++;
                playerScoreboard.textContent = playerScore;
            }
        }
        else if(player == 'scissors'){
            if(machine == 'rock'){
                result.textContent = 'Machine wins.';
                machineScore ++;
                machineScoreboard.textContent = machineScoreboard;
            }else{
                result.textContent = 'Player wins.';
                playerScore ++;
                playerScoreboard.textContent = playerScore;
            }
        }
        else if(player == 'paper'){
            if(machine == 'scissors'){
                result.textContent = 'Machine wins.';
                machineScore ++;
                machineScoreboard.textContent = machineScore;
            }else{
                result.textContent = 'Player wins.';
                playerScore ++;
                playerScoreboard.textContent = playerScore;
            }
        }
    }

    // game over
    const gameOver = (playerSymbols, roundsLeft) => {
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        // const reloadBtn = document.querySelector('.reload');

        playerSymbols.forEach(symbol => {
            symbol.style.display = 'none';
        })

        if (playerScore > machineScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You win!';
            result.style.color = '#308D46';
        }
        else if(playerScore < machineScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You lost.';
            result.style.color = 'red';
        }
        else{
            result.style.fontSize = '2rem';
            result.innerText = 'Tie game -.-';
            result.style.color = 'grey';
        }

    }

    // To do: refactor and integrate with HTML.

    // playGame();
}