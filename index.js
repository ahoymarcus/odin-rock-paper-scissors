let startGame = document.querySelector('.start');
startGame.addEventListener('click', playGame);

let gameChoises = ['rock', 'paper', 'scissors'];
let counter = 0;


const score = {
    playerScore: 0,
    computerScore: 0
}


function computerPlay() {
    let index = Math.floor(Math.random() * 3);
    
    let choise = gameChoises[index];
    
    return choise;
}


function humanPlay() {
    let choise = '';
    let isInvalid = true;
    
    while (isInvalid) {
        choise = prompt(`Make your choise -> Rock - Paper or Scissors`);
        
        if (choise) {
            if (
                choise.toLowerCase() === 'rock' || 
                choise.toLowerCase() === 'papper' || 
                choise.toLowerCase() === 'scissors'
            ) {
                isInvalid = false;
            }
        }
    }
    
    return choise;
}


function printScore() {
     console.log(`Score:\n Player: ${score.playerScore} ::: Computer: ${score.computerScore}`);
}


function gameWinner() {
    if (score.playerScore > score.computerScore) {
        console.log('Congratulations! YOU WON!');
    } else if (score.playerScore < score.computerScore) {
        console.log('Sorry, you lost! Better luck next time.');
    } else {
        console.log(`Ugh! It was a tie. :-(`);
    }
    
    counter = 0;
}


function playRound() {
    while (counter < 5) {
        counter++;
        console.log('ROUND: ', counter);
        
        let computerChoise = computerPlay();
        let playerChoise = humanPlay();
        
        console.log(`Computer choise: ${computerChoise}`);
        console.log(`Player's choise: ${playerChoise}`);
        
        if (computerChoise.toLowerCase() === playerChoise.toLowerCase()) {
            console.log('It was a draw');
        } else if (
            playerChoise.toLowerCase() === 'rock' && computerChoise.toLowerCase() === 'scissors' ||
            playerChoise.toLowerCase() === 'papper' && computerChoise.toLowerCase() === 'rock' ||
            playerChoise.toLowerCase() === 'scissors' && computerChoise.toLowerCase() === 'papper'
            ) {
                console.log(`Player wins! ${playerChoise.toUpperCase()} beats ${computerChoise.toUpperCase()}`);
            
                score.playerScore = score.playerScore + 1;
            } else {
                console.log(`Computer wins! ${computerChoise.toUpperCase()} beats ${playerChoise.toUpperCase()}`);
            
                score.computerScore = score.computerScore + 1;
            }
                
        printScore();
    }
}


function playGame() {
    
    playRound();
    
    if (counter >= 5) {
        gameWinner();
    }
    
}





