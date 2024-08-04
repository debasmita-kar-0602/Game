const choices =["rock","paper","Scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let ComputerScore = 0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if(playerChoice === computerChoice){
        result= " It's A TIE";
    }
    else{
        switch(playerChoice){
            case "rock":
              result = (computerChoice === "Scissors") ? " YOU WIN!": "YOU LOSE!";
              break;

            case "paper":
              result =  (computerChoice === "rock") ? " YOU WIN!": "YOU LOSE!";
              break;

            case "Scissors":
              result =  (computerChoice === "paper") ? " YOU WIN!": "YOU LOSE!";
              break;
        }
    }
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText","redText");


    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            ComputerScore++;
            computerScoreDisplay.textContent = ComputerScore;
            break;
    }        
}

