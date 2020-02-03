import "./styles.css";

let computerChoice;
let playerChoice;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

function getRandomNum() {
  return Math.floor(Math.random() * Math.floor(3));
}

function assignComputerChoice() {
  computerChoice = getRandomNum();
}
console.log();

rock.addEventListener("click", () => {
  playerChoice = "rock";
  console.log(playerChoice);
});
paper.addEventListener("click", () => {
  playerChoice = "paper";
  console.log(playerChoice);
});
scissors.addEventListener("click", () => {
  playerChoice = "scissors";
  console.log(playerChoice);
});

if (computerChoice === "rock") {
  console.log("computer selected rock");
} else if (computerChoice === "paper") {
  console.log("computer selected paper");
} else {
  console.log("computer selected scissors");
}
