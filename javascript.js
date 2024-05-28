let humanSelection;
let computerSelection;

let humanScore = 0;
let computerScore = 0;

const sci = document.querySelector('.scissors');
const pap = document.querySelector('.paper');
const sto = document.querySelector('.stone');
const results = document.querySelector('.results');
const score = document.querySelector('.score');
const comp = document.querySelector('.computer');
const huma = document.querySelector('.human');

sci.addEventListener('click', () => {
    humanSelection = 'scissors';
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
})
pap.addEventListener('click', () => {
    humanSelection = 'paper';
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
})
sto.addEventListener('click', () => {
    humanSelection = 'stone';
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
})

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return 'scissors';
    } else if (randomNum === 1) {
        return 'paper';
    } else {return 'stone'}
}

function playRound(humanChoice , computerChoice) {

    if (humanScore + computerScore === 5) {
        if (humanScore > computerScore) {
            results.textContent = 'You win!!!!!!!!!!!!'
        } else {results.textContent = 'You lose!!!!!!!!!'}
    

    } else {

        if (humanChoice === 'scissors' && computerChoice === 'stone') {
            computerScore += 1;
            results.textContent = 'You lose, stone beats scissors.';
            score.textContent = `My Score = ${humanScore}, Computer Score = ${computerScore}`;
            huma.textContent = `You chose ${humanChoice}`;
            comp.textContent = `Computer chose ${computerChoice}`;

        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            humanScore += 1;
            results.textContent = 'You win, scissors beats paper'
            score.textContent = `My Score = ${humanScore}, Computer Score = ${computerScore}`;
            huma.textContent = `You chose ${humanChoice}`;
            comp.textContent = `Computer chose ${computerChoice}`;

        } else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
            results.textContent = 'Its a tie!'
            score.textContent = `My Score = ${humanScore}, Computer Score = ${computerScore}`;
            huma.textContent = `You chose ${humanChoice}`;
            comp.textContent = `Computer chose ${computerChoice}`;
            
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            computerScore += 1;
            results.textContent = 'You lose, scissors beats paper.';
            score.textContent = `My Score = ${humanScore}, Computer Score = ${computerScore}`;
            huma.textContent = `You chose ${humanChoice}`;
            comp.textContent = `Computer chose ${computerChoice}`;
            
        } else if (humanChoice === 'paper' && computerChoice === 'stone') {
            humanScore += 1;
            results.textContent = 'You win, paper beats stone';
            score.textContent = `My Score = ${humanScore}, Computer Score = ${computerScore}`;
            huma.textContent = `You chose ${humanChoice}`;
            comp.textContent = `Computer chose ${computerChoice}`;
            
        } else if (humanChoice === 'paper' && computerChoice === 'paper') {
            results.textContent = 'Its a tie!'
            score.textContent = `My Score = ${humanScore}, Computer Score = ${computerScore}`;
            huma.textContent = `You chose ${humanChoice}`;
            comp.textContent = `Computer chose ${computerChoice}`;
            
        } else if (humanChoice === 'stone' && computerChoice === 'paper') {
            computerScore += 1;
            results.textContent = 'You lose, scissors beats stone.';
            score.textContent = `My Score = ${humanScore}, Computer Score = ${computerScore}`;
            huma.textContent = `You chose ${humanChoice}`;
            comp.textContent = `Computer chose ${computerChoice}`;
            
        } else if (humanChoice === 'stone' && computerChoice === 'scissors') {
            humanScore += 1;
            results.textContent = 'You win, stone beats scissors';
            score.textContent = `My Score = ${humanScore}, Computer Score = ${computerScore}`;
            huma.textContent = `You chose ${humanChoice}`;
            comp.textContent = `Computer chose ${computerChoice}`;
            
        } else if (humanChoice === 'stone' && computerChoice === 'stone') {
            results.textContent = 'Its a tie!';
            score.textContent = `My Score = ${humanScore}, Computer Score = ${computerScore}`;
            huma.textContent = `You chose ${humanChoice}`;
            comp.textContent = `Computer chose ${computerChoice}`;
        }
    }
    
}

    





