// Step 6: Write logic to play entire game
// Create function playGame
// Move previous functions and variables inside of playGame function
// Play 5 rounds and declare a winner

function playGame() {
    alert(`Welcome! You are going to play 5 rounds of 'rock, paper, scissors' against the computer. Each round's winner and the running score will be displayed after each round. Good luck!`)

    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        let computerChoice;
        let number = (Math.random() * 3);
        if (+number < 1) {
            computerChoice = 'rock'
        } else if (+number < 2) {
            computerChoice = 'paper'
        } else {
            computerChoice = 'scissors'
        };
        return computerChoice;
    }

    function getHumanChoice() {
        let humanChoice;
        let humanInput = (prompt('Rock, paper, scissors, SHOOT! Please enter your selection for a game of rock, paper, scissors:')).toLowerCase();
        if (humanInput === 'rock') {
            humanChoice = 'rock'
        } else if (humanInput === 'paper') {
            humanChoice = 'paper'
        } else if (humanInput === 'scissors') {
            humanChoice = 'scissors'
        } else if (humanInput === ' ') {
            alert('No selection made. Please enter either \'rock\,\' \'paper\,\' or \'scissors.\'');
        } else {
            alert('Invalid selection made. Please enter either \'rock\,\' \'paper\,\' or \'scissors.\'')
        }
        return humanChoice;
    }

    function playRound (humanChoice, computerChoice) {
        let message;
        if (computerChoice === 'rock') {
            if (humanChoice === 'rock') {
                message = 'Computer selected \'rock\'. Tie! No winner for this round.';
            } else if (humanChoice === 'paper') {
                message = 'Computer selected \'rock\'. Paper beats rock; you win this round!';
                ++humanScore;
            } else {
                message = 'Computer selected \'rock\'. Rock beats scissors; you lose this round!';
                ++computerScore;
            }
        }
        else if (computerChoice === 'paper') {
            if (humanChoice === 'paper') {
                message = 'Computer selected \'paper\'. Tie! No winner for this round.';
            } else if (humanChoice === 'scissors') {
                message = 'Computer selected \'paper\'. Scissors beats paper; you win this round!';
                ++humanScore;
            } else {
                message = 'Computer selected \'paper\'. Paper beats rock; you lose this round!';
                ++computerScore;
            }
        }    
        else {
            if (humanChoice === 'scissors') {
                message = 'Computer selected \'scissors\'. Tie! No winner for this round.';
            } else if (humanChoice === 'rock') {
                message = 'Computer selected \'scissors\'. Rock beats scissors; you win this round!';
                ++humanScore;
            } else {
                message = 'Computer selected \'scissors\'. Scissors beats paper; you lose this round!';
                ++computerScore;
            }
        }
        alert(`${message} \nYour Score: ${humanScore} Computer Score: ${computerScore}`)
    }

    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);

    function result() {
        let winner;
        if (computerScore === humanScore) {
            winner = `Tie game! No winners or losers this time.`;
        } else if (computerScore < humanScore) {
            winner = `You win! Congratulations!`;
        } else {
            winner = `You lose! Better luck next time.`;
        }
        return winner;
    }

    alert(`GAME OVER \n${result()} \nYour Score: ${humanScore} Computer Score: ${computerScore}`);

};