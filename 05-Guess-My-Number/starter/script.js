'use strict';

let score = 0;
let highScore = 0;
let randomNumber = 0;
let guess = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const startGame = function () {
  score = 20;

  document.querySelector('.score').textContent = score;

  randomNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').disabled = false;
};

startGame();

document.querySelector('.again').addEventListener('click', startGame);

document.querySelector('.check').addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  if (!guess) {
    displayMessage('No number');
  } else {
    if (guess > 20 || guess < 1) {
      displayMessage('Number must be between 1 and 20');
    } else if (guess !== randomNumber) {
      displayMessage(guess > randomNumber ? 'Too high' : 'Too low');
    } else if (guess === randomNumber) {
      displayMessage('Correct number');
      document.querySelector('.number').textContent = randomNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (score > highScore) {
        highScore = score;
        console.log(highScore);
        document.querySelector('.highscore').textContent = highScore;
      }

      document.querySelector('.check').disabled = true;

      return;
    }

    score--;
    document.querySelector('.score').textContent = score;

    if (score === 0) {
      displayMessage('You lost the game');
      document.querySelector('body').style.backgroundColor = '#ff0000';

      document.querySelector('.check').disabled = true;

      return;
    }
  }
});
