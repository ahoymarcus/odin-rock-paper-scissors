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


function gameWinner() {
    if (score.playerScore > score.computerScore) {
        console.log('Congratulations! YOU WON!');
    } else if (score.playerScore < score.computerScore) {
        console.log('Sorry, you lost! Better luck next time.');
    } else {
        console.log(`Ugh! It was a tie. :-(`);
    }
}



function playGame() {
    
    while (counter < 5) {
        counter++;
        console.log('ROUND: ', counter);
        
        let computerChoise = computerPlay();
        let playerChoise = humanPlay();
        
        console.log(`Computer choise: ${computerChoise}`);
        console.log(`Player's choise: ${playerChoise}`);
        
        if (computerChoise === playerChoise) {
            console.log('It was a draw');
        } else if (
            playerChoise === 'rock' && computerChoise === 'scissors' ||
            playerChoise === 'papper' && computerChoise === 'rock' ||
            playerChoise === 'scissor' && computerChoise === 'papper'
            ) {
                console.log('Player wins');
            
                score.playerScore = score.playerScore + 1;
            } else {
                console.log('Computer wins');
            
                score.computerScore = score.computerScore + 1;
            }
                
        
         /* Score */
        console.log(`Score:\n Player: ${score.playerScore} ::: Computer: ${score.computerScore}`);
    }
    
    if (counter >= 5) {
        gameWinner();
    }
    
}





