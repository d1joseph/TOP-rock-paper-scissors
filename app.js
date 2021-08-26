// roshambo
// Learn more about this famous ancient game: https://en.wikipedia.org/wiki/Rock_paper_scissors
// Rules: Rock > Scissors > paper


// randint function - returns a random int between 1 and 3
const rand = () => {
    return Math.floor((Math.random() * 3));
}
// score values
let machine_score, player_score;
machine_score = 0;
player_score = 0;
// hardcode number of games...for now. This will be defined by user input later.
const n_games = 5;
// symbols
const symbols = ['rock', 'paper', 'scissors'];
// score check function
const show_current_score = () => {
    console.log(`Machine score: ${machine_score}\nPlayer score: ${player_score}`);
}
// machine throws symbol
const throw_symbol = () => {
    return symbols[rand()];
}

/*
To do:
1. game loop
2. get player input for throw
3. machine throw callback
4. implement cases (paper > rock > scissors)
5. score counter and check
6. game summary
7. test cases 

*/