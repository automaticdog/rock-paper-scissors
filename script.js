const choice = ['rock', 'paper', 'scissors'];

function computerPlay() {
  return choice[Math.floor(Math.random() * 3)]
}

const buttons = document.querySelectorAll('.buttons>button')
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

let playerSelection = '';
let computerSelection = '';

const output = document.getElementById('outcome');
const MSG = document.createElement('p');

// creates counter to track # of games played & constructs p element to display it
let counter = 0;
const countContainer = document.querySelector('.counterContainer')
const countDisplay = document.createElement('p');
countDisplay.textContent = `${counter} games played`;
countContainer.appendChild(countDisplay);

let wins = 0;
let losses = 0;
let ties = 0;

function disableButtons() {
  buttons.forEach(button => {
    console.log('button disabled');
    button.setAttribute('disabled', '');
  });
};

// contains game logic
rockBtn.addEventListener('click', () => {
  counter += 1;
  rockBtn.style.backgroundColor = '#005bb4';
  const computerSelection = computerPlay();
  let playerSelection = 'rock';

  if (computerSelection === playerSelection) {
    output.classList.add('active');
    MSG.textContent = `It's a TIE...play again?`;
    output.appendChild(MSG);
    ties += 1;
  } else if (computerSelection === 'scissors') {
    output.classList.add('active');
    MSG.textContent = `${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}. You win!!`;
    output.appendChild(MSG);
    wins += 1;
  } else if (computerSelection === 'paper') {
    output.classList.add('active');
    MSG.textContent = `${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}... You lose :(((`;
    output.appendChild(MSG);
    losses += 1;
  }
  countDisplay.textContent = `${counter} games played`;
  disableButtons();
});

paperBtn.addEventListener('click', () => {
  counter += 1;
  paperBtn.style.backgroundColor = '#005bb4';
  let computerSelection = computerPlay();
  let playerSelection = 'paper';

  if (computerSelection === playerSelection) {
    output.classList.add('active');
    MSG.textContent = `It's a TIE...play again?`;    
    output.appendChild(MSG);
    ties += 1;
  } else if (computerSelection === 'rock') {
    output.classList.add('active');
    MSG.textContent = `${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}. You win!!`;
    output.appendChild(MSG);
    wins += 1;
  } else if (computerSelection === 'scissors') {
    output.classList.add('active');
    MSG.textContent = `${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}... You lose :(((`;
    output.appendChild(MSG);
    losses += 1;
  }
  countDisplay.textContent = `${counter} games played`;
  disableButtons();
});

scissorsBtn.addEventListener('click', () => {
  counter += 1;
  scissorsBtn.style.backgroundColor = '#005bb4';
  let computerSelection = computerPlay();
  let playerSelection = 'scissors';

  if (computerSelection === playerSelection) {
    output.classList.add('active');
    MSG.textContent = `It's a TIE...play again?`;    
    output.appendChild(MSG);
    ties += 1;
  } else if (computerSelection === 'paper') {
    output.classList.add('active');
    MSG.textContent = `${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}. You win!!`;
    output.appendChild(MSG);
    wins += 1;
  } else if (computerSelection === 'rock') {
    output.classList.add('active');
    MSG.textContent = `${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}... You lose :(((`;
    output.appendChild(MSG);
    losses += 1;
  }
  countDisplay.textContent = `${counter} games played`;
  disableButtons();
});
// end game logic

const restart = document.getElementById('restartButton');
const container = document.getElementsByClassName('container');

restart.addEventListener('click', () => {
  buttons.forEach(button => { button.style.backgroundColor = 'dodgerblue'; });
  buttons.forEach(button => { button.removeAttribute('disabled'); });
  output.textContent = '';
  output.classList.remove('active');
});

const gameOver = document.getElementById('gameOverPopup');
const gameOverMessage = document.createElement('p');
const newGameButton = document.createElement('button');
newGameButton.setAttribute('id', 'newGame');

function notifyGameOver() {
  console.log('you win!');
  gameOver.classList.add('active');
  gameOver.appendChild(gameOverMessage);
  gameOver.appendChild(newGameButton);
  newGameButton.textContent = 'Play again?';
};

// function notifyLoss() {
//   console.log('game over! better luck next time');
//   gameOver.classList.add('active');
//   gameOver.appendChild(gameOverMessage);
//   gameOver.appendChild(newGame);
//   newGame.textContent = 'Play again?';
// }

function setLossMessage() {
  gameOverMessage.textContent = 'GAME OVER! You lost...better luck next time :(';
};
function setWinMessage() {
  gameOverMessage.textContent = 'You win - yaaay!';
}

window.addEventListener('click', () => {
  if (counter >= 5) {
    if (wins >= 3) {
      notifyGameOver();
      setWinMessage();
    } else if (losses >= 3) {
      notifyGameOver();
      setLossMessage();
    }
    // end game conditions - show new screen? popup??
  }
});

newGameButton.addEventListener('click', () => {
  gameOver.classList.remove('active');
  gameOver.textContent = '';
  counter = 0;
  wins = 0;
  losses = 0;
  ties = 0;
  countDisplay.textContent = `${counter} games played`;
})