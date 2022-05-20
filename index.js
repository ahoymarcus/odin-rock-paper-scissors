let startGame = document.querySelector('.start');
startGame.addEventListener('click', playGame);

let gameChoises = ['rock', 'paper', 'scissors'];
let counter = 0;


const score = {
    playerScore: 0,
    computerScore: 0
}


function computerPlay() {
    let choise = Math.floor(Math.random() * 3);
    
    return choise;
}


function humanPlay() {
    let choise = prompt('Make your choise:');
    
    /* DONT FORGET TO LIMIT PLAYERS CHOISE */
    
    
    return choise;
}


function gameWinner() {
    if (score.playerScore > score.computerScore) {
        console.log('Congratulations! YOU WON!');
    } else {
        console.log('Sorry, you lost! Better luck next time');
    }
}



function playGame() {
    
    while (counter < 5) {
        counter++;
        console.log('ROUND: ', counter);
        
        let computerChoise = computerPlay();
        let humanChoise = humanPlay();
        
        console.log(`Computer choise ${computerChoise}`);
        console.log(`Player's choise ${humanChoise}`);
        
         if (computerChoise > humanChoise) {
            console.log('Computer wins');
            
            score.computerScore = score.computerScore + 1;
            
        } else if (humanChoise > computerChoise) {
            console.log('Player wins');
            
           score.playerScore = score.playerScore + 1;
            
        } else {
            console.log('It was a draw');
        }
        
         /* Score */
        console.log(`Score:\n Player: ${score.playerScore} :: Computer: ${score.computerScore}`);
    }
    
    if (counter >= 5) {
        gameWinner();
    }
    
}





