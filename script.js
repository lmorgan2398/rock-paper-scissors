// Step 6: Write logic to play entire game
// Create function playGame
// Move previous functions and variables inside of playGame function
// Play 5 rounds and declare a winner

let playerScore = 0;
let computerScore = 0;

let playerScoreText = document.querySelector('.player-score');
let computerScoreText = document.querySelector('.computer-score');

playerScoreText.textContent = `Your Score: ${playerScore}`;
computerScoreText.textContent = `Nitwit's Score ${computerScore}`;

let playerChoice = document.querySelector('.player-choice');
let playerSelection = '';

let rockButton = document.querySelector('.rock-button');
let paperButton = document.querySelector('.paper-button');
let shearsButton = document.querySelector('.shears-button');

rockButton.addEventListener('click', () => {
    playerChoice.textContent = 'Rock';
    playerSelection = 'rock';
});

paperButton.addEventListener('click', () => {
    playerChoice.textContent = 'Paper';
    playerSelection = 'paper';
});

shearsButton.addEventListener('click', () => {
    playerChoice.textContent = 'Shears';
    playerSelection = 'shears';
});

let playRoundButton = document.querySelector('.play-round-button');

playRoundButton.addEventListener('click', () => {
    let computerSelection;
    function getComputerSelection() {
        let number = (Math.random() * 3);
        if (+number < 1) {
            computerSelection = 'rock'
        } else if (+number < 2) {
            computerSelection = 'paper'
        } else {
            computerSelection = 'shears'
        };
        return computerSelection;
    }
    getComputerSelection();

    let computerChoice = document.querySelector('.computer-choice');

    function playRound (playerSelected, computerSelected) {
        let roundInformation = document.querySelector('.round-information');
        if (playerSelected === 'rock' || playerSelected ==='paper' || playerSelected === 'shears') {
            let computerChoiceText = computerSelected.slice();
            console.log(computerChoiceText);
            let = computerChoiceTextUppercase = (computerChoiceText.charAt(0).toUpperCase()) + computerChoiceText.slice(1);
            console.log(computerChoiceTextUppercase);
            computerChoice.textContent = `${computerChoiceTextUppercase}`;
            if (computerSelected === 'rock') {
                if (playerSelected === 'rock') {
                    roundInformation.textContent = 'Nitwit selected \'rock\'. Tie! No winner for this round.';
                } else if (playerSelected === 'paper') {
                    roundInformation.textContent = 'Nitwit selected \'rock\'. Paper beats rock; you win this round!';
                    ++playerScore;
                } else {
                    roundInformation.textContent = 'Nitwit selected \'rock\'. Rock beats shears; you lose this round!';
                    ++computerScore;
                }
            }
            else if (computerSelected === 'paper') {
                if (playerSelected === 'paper') {
                    roundInformation.textContent = 'Nitwit selected \'paper\'. Tie! No winner for this round.';
                } else if (playerSelected === 'shears') {
                    roundInformation.textContent = 'Nitwit selected \'paper\'. shears beats paper; you win this round!';
                    ++playerScore;
                } else {
                    roundInformation.textContent = 'Nitwit selected \'paper\'. Paper beats rock; you lose this round!';
                    ++computerScore;
                }
            }    
            else {
                if (playerSelected === 'shears') {
                    roundInformation.textContent = 'Nitwit selected \'shears\'. Tie! No winner for this round.';
                } else if (playerSelected === 'rock') {
                    roundInformation.textContent = 'Nitwit selected \'shears\'. Rock beats shears; you win this round!';
                    ++playerScore;
                } else {
                    roundInformation.textContent = 'Nitwit selected \'shears\'. shears beats paper; you lose this round!';
                    ++computerScore;
                }
            }
        }
        playerScoreText.textContent = `Your Score: ${playerScore}`;
        computerScoreText.textContent = `Nitwit's Score ${computerScore}`;
        setTimeout(function() {
            playerSelection = '';
            computerSelection = '';
            playerChoice.textContent = 'Awaiting your choice...'
            computerChoice.textContent = `Awaiting Nitwit's choice...`;
        }, 5000);
    }
    playRound(playerSelection, computerSelection);
    if (computerScore === 5) {
        roundInformation.textContent = `Game Over! Nitwit wins. Better luck next time!`
    } else if (playerScore === 5) {
        roundInformation.textContent = `Game Over! You win. Congratulations!`
    };
});





























































function playGame() {
    alert(`Welcome! You are going to play 5 rounds of 'rock, paper, scissors' against the computer. Each round's winner and the running score will be displayed after each round. Good luck!`)



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