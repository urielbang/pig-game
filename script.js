'use strict';
//!selecting elements
const score0EL = document.querySelector('#score--0');
const score1EL = document.querySelector('#score--1');
const diceEL = document.querySelector('.dice');
const rollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const current1 = document.querySelector('#current--0');
const current2 = document.querySelector('#current--1');
let sumScorePlayer1 = 0;
// let sumScorePlayer2 = 0;
let holdSum1 = 0;
let holdSum2 = 0;

//starting condition
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');

const diceRollFunc = () => {
  let rndNum = Math.floor(Math.random() * (7 - 1) + 1);

  diceEL.classList.remove('hidden');

  diceEL.src = `dice-${rndNum}.png`;
  if (rndNum == 1 || sumScorePlayer1 > 100) {
    //!if player 1 active
    if (player1.classList.contains('player--active')) {
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
      current1.textContent = 0;
      sumScorePlayer1 = 0;
    } //!if player 2 active
    else {
      player2.classList.remove('player--active');
      player1.classList.add('player--active');
      current2.textContent = 0;
      sumScorePlayer1 = 0;
    }
  } else {
    if (player1.classList.contains('player--active')) {
      sumScorePlayer1 = sumScorePlayer1 + rndNum;

      current1.textContent = sumScorePlayer1;
    } else {
      sumScorePlayer1 += rndNum;

      current2.textContent = sumScorePlayer1;
    }
  }
};
rollDice.addEventListener('click', diceRollFunc);
btnHold.addEventListener('click', () => {
  if (player1.classList.contains('player--active')) {
    holdSum1 += sumScorePlayer1;
    score0EL.textContent = holdSum1;
    current1.textContent = 0;
    sumScorePlayer1 = 0;
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
  } else {
    holdSum2 += sumScorePlayer1;
    score1EL.textContent = holdSum2;
    current2.textContent = 0;
    sumScorePlayer1 = 0;
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
  }
});

btnNew.addEventListener('click', () => {
  score0EL.textContent = 0;
  score1EL.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;
  sumScorePlayer1 = 0;
  diceEL.classList.add('hidden');
  player2.classList.remove('player--active');
  player1.classList.add('player--active');
});
