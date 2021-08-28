// roshambo
// Learn more about this famous ancient game: https://en.wikipedia.org/wiki/Rock_paper_scissors
// Rules: rock > scissors > paper

// machine and player scores
let machine_score, player_score;
machine_score = 0;
player_score = 0;
let n_games = 5; // number of games
const symbols = ['rock-symbol', 'paper-symbol', 'scissors-symbol']; // roshambo symbols

// returns a random integer between 1 and 3
const rand = () => {
    return Math.floor((Math.random() * 3));
}

// score check function
const show_current_score = () => {
    console.log(`Machine score: ${machine_score}\nPlayer score: ${player_score}`);
}

// machine throws symbol
const machine_symbol_throw = () => {
    return symbols[rand()];
}

// player throws symbol
const player_symbol_throw = (clicked_id) => {
    console.log(clicked_id);
    return(clicked_id);
}

// game loop logic
const game_loop = () => {
    // the round starts when the player throws a symbol
    // the machine will also then throw a symbol and round evaluation begins
    while (n_games > 0) {
        let machine_symbol = machine_symbol_throw();
        let player_symbol = player_symbol_throw();

        // case 1 - rock beats scissors
        if (player_symbol == symbols[0] && machine_symbol == symbols[2]) {
            player_score += 1;
            console.log('Rock beats scissors, human wins.');
            show_current_score();
        // case 2 - paper beats rock    
        } else if (player_symbol == symbols[1] && machine_symbol == symbols[0]) {
            player_score += 1;
            console.log('Paper beats rock, human wins.');
            show_current_score();
        // case 3 - scissors beats paper
        } else if (player_symbol == symbols[2] && machine_symbol == symbols[1]) {
            player_score += 1;
            console.log('Scissors beats paper, human wins.');
            show_current_score();
        // case 4 - symbols match, tie game, throw again
        } else if (player_symbol == machine_symbol) {
            console.log('Tie game, throw again.');
            show_current_score();
        } else {
            machine_score += 1;
            console.log(`${machine_symbol} beats ${player_symbol}, machine wins.`);
            show_current_score();
        }

        // decrement the round
        n_games -= 1;
    };

}

/*
To do:
1. bind game loop function to a button to start the game.
2. add an event listener within the loop, listening for the player's selection.
3. round evaluation starts when the player make a symbol throw.
4. continue loop until !n_game > 0. Game ends when condition met.
5. write game summary modal which will display when the game loop ends. 
*/