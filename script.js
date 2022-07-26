const startBtn = document.getElementById('startButton');

let choice = ['rock', 'paper', 'scissors'];
let computerSelection = computerPlay();

function computerPlay() {
  return choice[Math.floor(Math.random() * 3)]
}

function toTitleCase(str) {
  let strStart = str.toUpperCase().slice(0, 1);
  let strEnd = str.toLowerCase().slice(1)
  return strStart + strEnd;
}

function playRound(computerSelection, playerSelection) {
  playerSelection = prompt('Choose your weapon: ROCK, PAPER, or SCISSORS');
  computerSelection = computerPlay();

  console.log('computer: ' + computerSelection);
  console.log('player: ' + playerSelection);

    if (computerSelection == 'rock' && playerSelection.match(/scissors/i)) {
      alert(`${toTitleCase(computerSelection)} beats ${playerSelection.toLowerCase()}...YOU LOSE`) } 
    else if (computerSelection == `rock` && playerSelection.match(/paper/i)) {
      alert(`${toTitleCase(playerSelection)} beats ${computerSelection.toLowerCase()}...YOU WIN!`) }
    else if (computerSelection == `paper` && playerSelection.match(/rock/i)) {
      alert(`${toTitleCase(computerSelection)} beats ${playerSelection.toLowerCase()}...YOU LOSE`) }
    else if (computerSelection == `paper` && playerSelection.match(/scissors/i)) {
      alert(`${toTitleCase(playerSelection)} beats ${computerSelection.toLowerCase()}...YOU WIN!`) }
    else if (computerSelection == `scissors` && playerSelection.match(/rock/i)) {
      alert(`${toTitleCase(playerSelection)} beats ${computerSelection.toLowerCase()}...YOU WIN!`) }
    else if (computerSelection == `scissors` && playerSelection.match(/paper/i)) {
      alert(`${toTitleCase(computerSelection)} beats ${playerSelection.toLowerCase()}...YOU LOSE`) }
    else if (computerSelection.toUpperCase() == playerSelection.toUpperCase()) {
      alert(`It's a TIE...play again?`); 
      i -= 1;}
    else {
      alert('Looks like that\'s not a valid selection...try again?')
    }
  }

function game() {
  for (let i = 0; i < 5; i++) {
  playRound();
  }
}

startBtn.addEventListener('click', game);