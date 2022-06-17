/*
 *  The Web UI Game Version
 */
const msgUI = document.querySelector('.result-log');
const gameSelectionBtns = document.querySelectorAll('button');

let gameChoises = ['rock', 'paper', 'scissors'];

let counter = 0;
const score = {
	playerScore: 0,
	computerScore: 0
}


gameSelectionBtns.forEach(function(btn) {
	btn.addEventListener('click', function(e) {
		console.log(e);
		let playerChoise = e.target.id;
		
		//console.log(msgUI.hasChildNodes());
		if (msgUI.hasChildNodes()) {
			removeUIMsg();
		}
		
		playRound(playerChoise, computerPlay());
	});
});


function computerPlay() {
	let index = Math.floor(Math.random() * 3);
	let choise = gameChoises[index];
	
	return choise;
}


function printScore() {
  console.log(`Score:\n Player: ${score.playerScore} ::: Computer: ${score.computerScore}`);
	printUIMsg(`Score:\n Player: ${score.playerScore} ::: Computer: ${score.computerScore}`);
}


function gameWinner() {
	if (score.playerScore > score.computerScore) {
			console.log('Congratulations! YOU WON!');
			
			printUIMsg('Congratulations! YOU WON!');
	} else if (score.playerScore < score.computerScore) {
			console.log('Sorry, you lost! Better luck next time.');
			
			printUIMsg('Sorry, you lost! Better luck next time.');
	} 
	
	counter = 0;
	score.playerScore = 0;
	score.computerScore = 0;
}



function printUIMsg(msg) {
	const para = document.createElement('p');
	
	para.textContent = msg;
	msgUI.appendChild(para);
}

function removeUIMsg() {
	while (msgUI.firstChild) {
		msgUI.removeChild(msgUI.firstChild);
	}
}


function playRound(playerChoise, computerChoise) {  
	counter += 1;
	
	console.log(`ROUND: ${counter}`);
	console.log(`Computer choise: ${computerChoise.toUpperCase()}`);
	console.log(`Player's choise: ${playerChoise.toUpperCase()}`);
	
	printUIMsg(`ROUND: ${counter}`);
	printUIMsg(`Computer choise: ${computerChoise.toUpperCase()}`);
	printUIMsg(`Player's choise: ${playerChoise.toUpperCase()}`);
	
	if (computerChoise.toLowerCase() === playerChoise.toLowerCase()) {
		console.log('It was a draw');
	} else if (
		playerChoise.toLowerCase() === 'rock' && computerChoise.toLowerCase() === 'scissors' ||
		playerChoise.toLowerCase() === 'paper' && computerChoise.toLowerCase() === 'rock' ||
		playerChoise.toLowerCase() === 'scissors' && computerChoise.toLowerCase() === 'paper'
		) {
			console.log(`Player wins! ${playerChoise.toUpperCase()} beats ${computerChoise.toUpperCase()}`);
			printUIMsg(`Player wins! ${playerChoise.toUpperCase()} beats ${computerChoise.toUpperCase()}`);
			
			score.playerScore = score.playerScore + 1;
		} else {
			console.log(`Computer wins! ${computerChoise.toUpperCase()} beats ${playerChoise.toUpperCase()}`);
			printUIMsg(`Computer wins! ${computerChoise.toUpperCase()} beats ${playerChoise.toUpperCase()}`);
			
			score.computerScore = score.computerScore + 1;
		}
					
	printScore();
	
	if (score.playerScore >= 5 || score.computerScore >= 5) {
		gameWinner();
	} 
}




