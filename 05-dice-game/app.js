const audio = document.querySelector(".audio");
const diceImg = document.querySelector(".dice-img");
const rollDice = document.querySelector(".roll-dice");
let player1Score = document.querySelector(".score-1");
const player1 = document.querySelector(".player--1");
const player2 = document.querySelector(".player--2");
let player1TotalScore = document.querySelector(".p1-total-score");
let player2Score = document.querySelector(".score-2");
let player2TotalScore = document.querySelector(".p2-total-score");
const reset = document.querySelector(".reset-btn");
const resultMessage = document.querySelector(".resultMessage");

let p1 = 0; // Current dice value for Player 1
let totalP1 = 0; // Total score for Player 1
let p2 = 0; // Current dice value for Player 2
let totalP2 = 0; // Total score for Player 2

rollDice.addEventListener("click", () => {
  let dice = Math.floor(Math.random() * 6) + 1;
  diceImg.src = `dice-${dice}.png`;
  audio.play();
  if (dice != 1 && player1.classList.contains("active-player")) {
    p1 = dice;
    totalP1 += p1;
    player1Score.textContent = p1;
    player1TotalScore.textContent = totalP1;
    if (totalP1 >= 100) {
      resultMessage.textContent =
        "Congrats!🥳  Player 1 has won the game! 🥳🥳";
      rollDice.disabled = true;
    }
  } else if (dice != 1 && player2.classList.contains("active-player")) {
    p2 = dice;
    totalP2 += p2;
    player2Score.textContent = p2;
    player2TotalScore.textContent = totalP2;
    if (totalP2 >= 100) {
      resultMessage.textContent =
        "Congrats!🥳  Player 2 has won the game! 🥳🥳";
      rollDice.disabled = true;
    }
  } else if (dice == 1 && player1.classList.contains("active-player")) {
    console.log(dice);
    player1Score.textContent = 0;
    player1.classList.remove("active-player");
    player2.classList.add("active-player");
  } else if (dice == 1 && player2.classList.contains("active-player")) {
    console.log(dice);
    player2.classList.remove("active-player");
    player1.classList.add("active-player");
  }
});

// Reset the game

reset.addEventListener("click", () => {
  p1 = 0;
  p2 = 0;
  totalP1 = 0;
  totalP2 = 0;
  player1Score.textContent = 0;
  player1TotalScore.textContent = 0;
  player2Score.textContent = 0;
  player2TotalScore.textContent = 0;
  resultMessage.textContent = "";
  rollDice.disabled = false;
});
