

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return 'scissors';
    } else if (randomNum === 1) {
        return 'paper';
    } else {return 'stone';}
}



function getHumanChoice() {
    let humanChoice = prompt('What is your choice?')
    return humanChoice.toLowerCase()
}




function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice , computerChoice) {
        if (humanChoice === 'scissors' && computerChoice === 'stone') {
            computerScore += 1;
            console.log('You lose, stone beats scissors.')
        } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            humanScore += 1;
            console.log('You win, scissors beats paper')
        } else if (humanChoice === 'scissors' && computerChoice === 'scissors') {
            console.log('Its a tie!')
        } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            computerScore += 1;
            console.log('You lose, scissors beats paper.')
        } else if (humanChoice === 'paper' && computerChoice === 'stone') {
            humanScore += 1;
            console.log('You win, paper beats stone')
        } else if (humanChoice === 'paper' && computerChoice === 'paper') {
            console.log('Its a tie!')
        } else if (humanChoice === 'stone' && computerChoice === 'paper') {
            computerScore += 1;
            console.log('You lose, scissors beats stone.')
        } else if (humanChoice === 'stone' && computerChoice === 'scissors') {
            humanScore += 1;
            console.log('You win, stone beats scissors')
        } else if (humanChoice === 'stone' && computerChoice === 'stone') {
            console.log('Its a tie!')
        } else console.log('what is that')
    }
    
    let humanSelection;
    let computerSelection;

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
    console.log(`My Score = ${humanScore}, Computer Score = ${computerScore}`)
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
    console.log(`My Score = ${humanScore}, Computer Score = ${computerScore}`)
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
    console.log(`My Score = ${humanScore}, Computer Score = ${computerScore}`)
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
    console.log(`My Score = ${humanScore}, Computer Score = ${computerScore}`)
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
    console.log(`My Score = ${humanScore}, Computer Score = ${computerScore}`)

    if (humanScore === computerScore) {
        alert('Its a tie!')
    } else if (humanScore < computerScore) {
        alert('You lose!')
    } else {alert('You win!')}
}

playGame();
