/*
 *  The Web UI Game Version
 */
// Start the Game
let startGame = document.querySelector('.start');
startGame.addEventListener('click', playGame);


// UI log
const msgUI = document.querySelector('.result-log');

// Make players selections
const gameSelectionBtns = document.querySelectorAll('button');






let gameChoises = ['rock', 'paper', 'scissors'];


// TEST THESE VARS AT THE LOCAL SCOPE
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
    let humanChoise;
    
    gameSelectionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            console.log(e);
            humanChoise = e.target.textContent;
            
            // log
            msgUI.innerHTML = humanChoise;
            
            return humanChoise;
        });
    });
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



function printUIMsg(msg) {
    return null;
}


function playRound() {    
    while (counter < 5) {
        counter++;
        console.log('ROUND: ', counter);
        
        
        
        let computerChoise = computerPlay();
        let playerChoise = humanPlay();
        
        
        while (!playerChoise) {
            if (playerChoise) {
                if (computerChoise.toLowerCase() === playerChoise.toLowerCase()) {
                    console.log('It was a draw');
                } else if (
                    playerChoise.toLowerCase() === 'rock' && computerChoise.toLowerCase() === 'scissors' ||
                    playerChoise.toLowerCase() === 'paper' && computerChoise.toLowerCase() === 'rock' ||
                    playerChoise.toLowerCase() === 'scissors' && computerChoise.toLowerCase() === 'paper'
                    ) {
                        console.log(`Player wins! ${playerChoise.toUpperCase()} beats ${computerChoise.toUpperCase()}`);
                    
                        score.playerScore = score.playerScore + 1;
                    } else {
                        console.log(`Computer wins! ${computerChoise.toUpperCase()} beats ${playerChoise.toUpperCase()}`);
                    
                        score.computerScore = score.computerScore + 1;
                    }
                        
                printScore();
            } else {
                msgUI.innerHTML = `Make your choise -> Rock - Paper or Scissors`;
            }
        }
        
        
       
        console.log(`Computer choise: ${computerChoise}`);
        console.log(`Player's choise: ${playerChoise}`);
            
            
        
        
    }
}


function playGame() {
    
    playRound();
    
    if (counter >= 5) {
        gameWinner();
    }
    
}





