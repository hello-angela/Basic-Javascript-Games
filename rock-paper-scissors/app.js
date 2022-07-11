// save and declare variables

const computerChoiceDisplay = document.getElementById("computer-guess")
const playerChoiceDisplay = document.getElementById("player-guess")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")

// make variable global
let playerChoice
let computerChoice
let result

// access buttons
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => { 
    playerChoice = e.target.id 
    playerChoiceDisplay.innerHTML = playerChoice
    // generate computer choice
    generateComputerChoice()
    getResult()
}));

// generate computer choice
function generateComputerChoice(){
    const randomNumber= Math.floor(Math.random() * possibleChoices.length) + 1
    switch (randomNumber){
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors"; 
            break;
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

// print result
function getResult(){
    if (computerChoice === playerChoice){
        result = "It's a draw!"
    } if (computerChoice === "rock" && playerChoice === "paper"){
        result = "You win!"
    }  if (computerChoice === "paper" && playerChoice === "rock"){
        result = "You lose!"
    }  if (computerChoice === "paper" && playerChoice === "scissors"){
        result = "You win!"
    }  if (computerChoice === "scissors" && playerChoice === "paper"){
        result = "You lose!"
    } if (computerChoice === "scissors" && playerChoice === "rock"){
        result = "You win!"
    } if(computerChoice === "rock" && playerChoice === "scissors"){
        result = "You lose!"
    }
    resultDisplay.innerHTML = result
}
