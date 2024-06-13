// Step 6: Write logic to play entire game
// Create function playGame
// Move previous functions and variables inside of playGame function
// Play 5 rounds and declare a winner

function playGame() {
    alert(`Welcome! You are going to play 5 rounds of 'rock, paper, scissors' against the computer. Each round's winner and the running score will be displayed in the console. Good luck!`)

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
        if (computerChoice === 'rock') {
            if (humanChoice === 'rock') {
                console.log('Computer selected \'rock\'. Tie! No winner for this round.');
            } else if (humanChoice === 'paper') {
                console.log('Computer selected \'rock\'. Paper beats rock; you win this round!');
                ++humanScore;
            } else {
                console.log('Computer selected \'rock\'. Rock beats scissors; you lose this round!');
                ++computerScore;
            }
        }
        else if (computerChoice === 'paper') {
            if (humanChoice === 'paper') {
                console.log('Computer selected \'paper\'. Tie! No winner for this round.');
            } else if (humanChoice === 'scissors') {
                console.log('Computer selected \'paper\'. Scissors beats paper; you win this round!');
                ++humanScore;
            } else {
                console.log('Computer selected \'paper\'. Paper beats rock; you lose this round!');
                ++computerScore;
            }
        }    
        else {
            if (humanChoice === 'scissors') {
                console.log('Computer selected \'scissors\'. Tie! No winner for this round.');
            } else if (humanChoice === 'rock') {
                console.log('Computer selected \'scissors\'. Rock beats scissors; you win this round!');
                ++humanScore;
            } else {
                console.log('Computer selected \'scissors\'. Scissors beats paper; you lose this round!');
                ++computerScore;
            }
        }
        console.log(`Your Score: ${humanScore} Computer Score: ${computerScore}`)
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

    console.log(`GAME OVER`);

    if (computerScore === humanScore) {
        console.log(`Tie game! No winners or losers this time.`);
    } else if (computerScore < humanScore) {
        console.log(`You win! Congratulations!`)
    } else {
        console.log(`You lose! Better luck next time.`)
    }

    console.log(`Final Score: \nYour Score: ${humanScore} Computer Score: ${computerScore}`);
}


playGame();