'use strict';

const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const newGame = function () {
  score0.textContent = 0;
  score1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  btnRoll.disabled = false;
  btnHold.disabled = false;
};

newGame();

btnNew.addEventListener('click', newGame);

const switchPlayer = function () {
  let activePlayer = document.querySelector('.player--active');
  activePlayer.classList.remove('player--active');
  if (activePlayer === player0El) {
    player1El.classList.add('player--active');
  } else {
    player0El.classList.add('player--active');
  }

  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
};

const addScore = function (randomDiceNumber) {
  let activePlayer = document.querySelector('.player--active');
  if (activePlayer === player0El) {
    currentScore0.textContent =
      Number(currentScore0.textContent) + randomDiceNumber;
  } else {
    currentScore1.textContent =
      Number(currentScore1.textContent) + randomDiceNumber;
  }
};

const holdScore = function () {
  let activePlayer = document.querySelector('.player--active');
  if (activePlayer === player0El) {
    score0.textContent =
      Number(score0.textContent) + Number(currentScore0.textContent);
    currentScore0.textContent = 0;

    if (Number(score0.textContent) >= 100) {
      player0El.classList.add('player--winner');
      btnRoll.disabled = true;
      btnHold.disabled = true;

      return;
    }
  } else {
    score1.textContent =
      Number(score1.textContent) + Number(currentScore1.textContent);
    currentScore1.textContent = 0;

    if (Number(score1.textContent) >= 100) {
      player1El.classList.add('player--winner');
      btnRoll.disabled = true;
      btnHold.disabled = true;

      return;
    }
  }

  switchPlayer();
};

const rollDice = function () {
  let randomDiceNumber = Math.floor(Math.random() * 6) + 1;

  diceEl.src = `dice-${randomDiceNumber}.png`;

  if (randomDiceNumber === 1) {
    switchPlayer();
  } else {
    addScore(randomDiceNumber);
  }
};

btnRoll.addEventListener('click', rollDice);

btnHold.addEventListener('click', holdScore);
