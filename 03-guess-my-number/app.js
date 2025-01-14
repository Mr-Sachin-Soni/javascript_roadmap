let inputVal = document.querySelector(".input");
let num = document.querySelector(".number");
let title = document.querySelector(".main-title");
let secretNumber = Math.floor(Math.random() * 10);
let playAgain = document.querySelector(".reset");
let checkBtn = document.querySelector(".check-btn");
const body = document.querySelector(".body");
const subTitle = document.querySelector(".sub-title");
const root = document.documentElement;
let score = document.querySelector(".score");
let highScore = document.querySelector(".high-score");
console.log(secretNumber);

let initScore = 20;
let initHighScore = 0;
score.innerHTML = initScore;
highScore.innerHTML = initHighScore;
// Automatically focus the input box on page load
window.addEventListener("DOMContentLoaded", () => {
  inputVal.focus();
});

checkBtn.addEventListener("click", () => {
  num.innerHTML = inputVal.value || "?";
  if (Number(num.innerHTML) === secretNumber) {
    // Correct guess
    body.style.background = "#b1ef84";
    root.style.setProperty("--white", "#000000");
    root.style.setProperty("--black", "#ffffff");
    title.innerHTML = "🎊 Congratulations! You got it right 🎊";
    playAgain.style.display = "block";
    subTitle.style.display = "none";
    checkBtn.style.cursor = "not-allowed";
    checkBtn.disabled = true;
    inputVal.disabled = true;

    initScore += 1;
    score.innerHTML = initScore;
    if (initScore > initHighScore) {
      initHighScore = initScore;
      highScore.innerHTML = initHighScore;
    }
  } else {
    // Wrong guess
    body.style.background = "#000000";
    root.style.setProperty("--white", "#ffffff");
    root.style.setProperty("--black", "#000000");
    title.innerHTML = "❌ Wrong Number! Try Again ❌";
    initScore -= 1;
    score.innerHTML = initScore;
  }
});

playAgain.addEventListener("click", () => {
  // Reset game state
  secretNumber = Math.floor(Math.random() * 10);
  body.style.background = "#000000";
  root.style.setProperty("--white", "#ffffff");
  root.style.setProperty("--black", "#000000");
  title.innerHTML = "🤔 Guess the secret number? 🤔";
  num.innerHTML = "?";
  inputVal.value = "";
  playAgain.style.display = "none";
  subTitle.style.display = "block";
  checkBtn.style.cursor = "pointer";
  checkBtn.disabled = false;
  inputVal.disabled = false;
  initScore = 20;
  score.innerHTML = initScore;

  // Re-focus the input box
  inputVal.focus();
});
