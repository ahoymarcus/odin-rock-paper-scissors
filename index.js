let startGame = document.querySelector('.start');
startGame.addEventListener('click', playGame);

let gameChoises = ['rock', 'paper', 'scissors'];
let counter = 0;




function computerPlay() {
    let choise = Math.floor(Math.random() * 2);
    
    return choise;
}


function humanPlay() {
    let choise = prompt('Make your choise:');
    
    /* DONT FORGET TO LIMIT PLAYERS CHOISE */
    
    
    return choise;
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
            
            
            
        } else if (humanChoise > computerChoise) {
            console.log('Player wins');
            
           
            
        } else {
            console.log('It was a draw');
        }
    }
}





