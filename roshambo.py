# Rock paper scissors rules
import random as r

"""
Rock > Scissors
Paper > Rock
Scissors > Paper
"""


def main():
    # scoreboard
    machine_score, player_score = 0,0
    # best of n games
    n_games = 5
    
    # roshambo symbols
    symbols = ['rock', 'paper', 'scissors']


    # show current score
    def show_current_score():
        print('Machine Score: {}\nPlayer Score: {}'.format(machine_score, player_score))


    # throw a random symbol returning rock, paper or scissors
    def throw():
        return symbols[r.randint(0,2)]


    # game loop
    while n_games > 0:        
        # get the players throw input
        player_throw = input('Select your throw: rock, paper or scissors\n')
        
        # get machine throw
        machine_throw = throw()

        # evaluate round outcome
        # case 1 - rock beats scissors
        if player_throw == symbols[0] and machine_throw == symbols[2]:
            player_score += 1 # increment player score
            print('Rock beats scissors, human wins.\n')
            show_current_score()

        # case 2 - paper beats rock
        elif player_throw == symbols[1] and machine_throw == symbols[0]:
            player_score += 1
            print('Paper beats rock, human wins.\n')
            show_current_score()
        
        # case 3 scissors beats paper
        elif player_throw == symbols[2] and machine_throw == symbols[1]:
            player_score += 1
            print('Scissors beats paper, human wins.\n')
            show_current_score()

        # tie game, run it back. Tie game doesn't count n.
        elif player_throw == machine_throw:
            print('Tie! Throw again.\n')
            show_current_score()

        # any events outside of the defined cases means the machine wins.
        else:
            machine_score += 1
            print('{} beats {}, machine wins.\n'.format(machine_throw, player_throw))
            show_current_score()

        n_games -= 1        


if __name__ == "__main__":
    main()