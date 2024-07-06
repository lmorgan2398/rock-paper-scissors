// Step 6: Write logic to play entire game
// Create function playGame
// Move previous functions and variables inside of playGame function
// Play 5 rounds and declare a winner

let playerScore = 0;
let computerScore = 0;

let roundNumber = 1;
let roundNumberText = document.querySelector(".round-number");

let playerScoreText = document.querySelector('.player-score');
let computerScoreText = document.querySelector('.computer-score');

playerScoreText.textContent = `Your Score: ${playerScore}`;
computerScoreText.textContent = `Nitwit's Score ${computerScore}`;

let playerChoiceImage = document.querySelector('.player-choice-img');
let computerChoiceImage = document.querySelector('.computer-choice-img');
computerChoiceImage.style.display = 'none';
playerChoiceImage.style.display = 'none';


let playerChoice = document.querySelector('.player-choice');
let playerSelection = '';

let rockButton = document.querySelector('.rock-button');
let paperButton = document.querySelector('.paper-button');
let shearsButton = document.querySelector('.shears-button');

rockButton.addEventListener('click', () => {
    playerChoice.textContent = 'Rock';
    playerSelection = 'rock';
    playerChoiceImage.src = "stone.webp";
    playerChoiceImage.style.display = 'inline';
});

paperButton.addEventListener('click', () => {
    playerChoice.textContent = 'Paper';
    playerSelection = 'paper';
    playerChoiceImage.src = "paper.webp";
    playerChoiceImage.style.display = 'inline';
});

shearsButton.addEventListener('click', () => {
    playerChoice.textContent = 'Shears';
    playerSelection = 'shears';
    playerChoiceImage.src = "shears.webp";
    playerChoiceImage.style.display = 'inline';
});

let roundInformation = document.querySelector('.round-information');
roundInformation.textContent = `Hit the 'play round' button once you have made your selection!`;

let playRoundButton = document.querySelector('.play-round-button');

let computerChoice = document.querySelector('.computer-choice');

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

    function playRound (playerSelected, computerSelected) {
        if (playerSelected === 'rock' || playerSelected ==='paper' || playerSelected === 'shears') {
            let computerChoiceText = computerSelected.slice();
            let = computerChoiceTextUppercase = (computerChoiceText.charAt(0).toUpperCase()) + computerChoiceText.slice(1);
            computerChoice.textContent = `${computerChoiceTextUppercase}`;

            if (computerSelected === 'rock') {
                computerChoiceImage.src = "stone.webp";
                computerChoiceImage.style.display = 'inline';
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
                computerChoiceImage.src = "paper.webp";
                computerChoiceImage.style.display = 'inline';
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
                computerChoiceImage.src = "shears.webp";
                computerChoiceImage.style.display = 'inline';
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
        playerScoreText.textContent = `Your Score: ${playerScore}`;
        computerScoreText.textContent = `Nitwit's Score ${computerScore}`;

        rockButton.disabled = true;
        paperButton.disabled = true;
        shearsButton.disabled = true;
        playRoundButton.disabled = true;

        if (computerScore === 5) {
            roundInformation.textContent = `Game Over! Nitwit wins. Better luck next time!`;
            roundInformation.style.color = 'greenyellow';
        } else if (playerScore === 5) {
            roundInformation.textContent = `Game Over! You win. Congratulations!`
            roundInformation.style.color = 'greenyellow';
        } else {
            let timeleft = 6;
            let roundTimer = setInterval(function(){
                resetButton.addEventListener('click', () => {
                    clearInterval(roundTimer)});
                --timeleft;
                roundNumberText.textContent = `Next round in ${timeleft}...`;
                if(timeleft === 0) {
                    clearInterval(roundTimer);
                    playerSelection = '';
                    computerSelection = '';

                    playerChoice.textContent = 'Awaiting your choice...'
                    computerChoice.textContent = `Awaiting Nitwit's choice...`;

                    computerChoiceImage.src = '';
                    computerChoiceImage.style.display = 'none';

                    playerChoiceImage.src = '';
                    playerChoiceImage.style.display = 'none';

                    ++roundNumber;
                    roundNumberText.textContent = `Round ${roundNumber}`;

                    rockButton.disabled = false;
                    paperButton.disabled = false;
                    shearsButton.disabled = false;
                    playRoundButton.disabled = false;

                    roundInformation.textContent = `Hit the 'play round' button once you have made your selection!`;
                }
            },1000);
        }
    }
    }   
    playRound(playerSelection, computerSelection);
});

let resetButton = document.querySelector('.reset-button');

resetButton.addEventListener('click', () => {
    console.log('working');
    playerSelection = '';
    computerSelection = '';

    playerChoice.textContent = 'Awaiting your choice...'
    computerChoice.textContent = `Awaiting Nitwit's choice...`;

    computerChoiceImage.src = '';
    computerChoiceImage.style.display = 'none';

    playerChoiceImage.src = '';
    playerChoiceImage.style.display = 'none';

    roundNumber = 1;
    console.log(roundNumber);
    roundNumberText.textContent = `Round 1`;

    playerScore = 0;
    computerScore = 0;

    playerScoreText.textContent = `Your Score: ${playerScore}`;
    computerScoreText.textContent = `Nitwit's Score ${computerScore}`;

    rockButton.disabled = false;
    paperButton.disabled = false;
    shearsButton.disabled = false;
    playRoundButton.disabled = false;

    roundInformation.textContent = `Hit the 'play round' button once you have made your selection!`;
    roundInformation.style.color = 'yellow';
});