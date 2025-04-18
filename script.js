console.log("Rocky rock!");

let humanScore = 0;
let compScore = 0;
let round = 1;

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultDiv = document.getElementById('result');


rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
scissorsBtn.addEventListener('click', () => handleClick('scissors'));


function handleClick(playerSelection) {
    const computerSelection = getComputerChoice();
    const msg = playRound(playerSelection, computerSelection);
     // create a new paragraph for this round’s result
     const p = document.createElement('p');
     p.textContent = msg;
     resultDiv.appendChild(p);

    round++;
    if (round > 5) {
        endGame();
    }
}




function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let choice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
    const validChoices = ['rock', 'paper', 'scissors'];
  
    if (validChoices.includes(choice)) {
      return choice;
    } else {
      alert("Invalid choice. Please enter rock, paper, or scissors.");
      return getHumanChoice(); // Recursively ask again
    }
}

function playRound(humanChoice, computerChoice) {
    const player = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();

    if (player === computer) {
        resultDiv.textContent = `Round ${round}: Tie! You both chose ${player}.`;
        return;
    }

    const winConditions = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper",
    };

    let message;

    if (winConditions[player] === computer) {
        humanScore++;
        message = `Round ${round}: You Win this round! ${player} beats ${computer}.;`
    } else {
        compScore++;
        message = `Round ${round}: You lost! this round! ${computer} beats ${player}.;`
    }

    return message;

}

function endGame() {
    // disable buttons so no more clicks
    [rockBtn, paperBtn, scissorsBtn].forEach(b => b.disabled = true);
  
    let finalMsg;
    if (humanScore > compScore)       finalMsg = "🎉 Game Over: You’re the champion!";
    else if (compScore > humanScore)  finalMsg = "😢 Game Over: Computer wins.";
    else                               finalMsg = "🤝 Game Over: It’s a tie.";
  
    const p = document.createElement('p');
    p.textContent = finalMsg;
    resultDiv.appendChild(p);
  
  }




