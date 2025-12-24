const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
  generateResult();
}))


function generateComputerChoice () {
  let randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
  if (randomNumber === 1) {
    computerChoice = "rock";
  }
    if (randomNumber === 2) {
    computerChoice = "scissors";
  }
    if (randomNumber === 3) {
    computerChoice = "paper";
  }

  console.log(randomNumber);
  computerChoiceDisplay.innerText =  computerChoice;
}

function generateResult () {
  if(computerChoice === userChoice) {
    result = "It's a draw!!!"
  }

  if ((computerChoice === "rock" && userChoice === 'paper') ||  (computerChoice === "paper" && userChoice === 'scissors') || (computerChoice === "scissors" && userChoice === 'rock')) {
    result = 'you win!'
  }
  if ((computerChoice === "rock" && userChoice === 'scissors') || (computerChoice === "paper" && userChoice === 'rock') || (computerChoice === "scissors" && userChoice === 'paper')) {
    result = 'you lost!'
  }
 
  resultDisplay.innerHTML = result;
}