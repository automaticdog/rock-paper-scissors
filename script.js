let plays = ['rock', 'paper', 'scissors'];

function computerPlay() {
  return plays[Math.floor(Math.random() * 3)]
}

let computerSelection = computerPlay();

function toTitleCase(str) {
  let strStart = str.toUpperCase().slice(0, 1);
  let strEnd = str.toLowerCase().slice(1)
  return strStart + strEnd;
}

function playRound(computerSelection, playerSelection) {
  playerSelection = prompt('Choose your weapon: ROCK, PAPER, or SCISSORS');
  computerSelection = computerPlay();

  console.log(computerSelection);
  console.log(playerSelection);

    if (computerSelection == 'rock' && playerSelection.match(/scissors/i)) {
      console.log(`${toTitleCase(computerSelection)} beats ${playerSelection.toLowerCase()}...YOU LOSE`) } 
    else if (computerSelection == `rock` && playerSelection.match(/paper/i)) {
      console.log(`${toTitleCase(playerSelection)} beats ${computerSelection.toLowerCase()}...YOU WIN!`) }
    else if (computerSelection == `paper` && playerSelection.match(/rock/i)) {
      console.log(`${toTitleCase(computerSelection)} beats ${playerSelection.toLowerCase()}...YOU LOSE`) }
    else if (computerSelection == `paper` && playerSelection.match(/scissors/i)) {
     console.log(`${toTitleCase(playerSelection)} beats ${computerSelection.toLowerCase()}...YOU WIN!`) }
    else if (computerSelection == `scissors` && playerSelection.match(/rock/i)) {
      console.log(`${toTitleCase(playerSelection)} beats ${computerSelection.toLowerCase()}...YOU WIN!`) }
    else if (computerSelection == `scissors` && playerSelection.match(/paper/i)) {
      console.log(`${toTitleCase(computerSelection)} beats ${playerSelection.toLowerCase()}...YOU LOSE`) }
    else if (computerSelection.toUpperCase() == playerSelection.toUpperCase()) {
      console.log(`It's a TIE...play again?`) }
    else {
      console.log('Looks like that\'s not a valid selection...try again?')
    }
  }

function game() {
  for (let i = 0; i < 5; i++) {
  playRound();
  }
}

game();