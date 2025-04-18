console.log("Rocky rock!");

let humanScore = 0;
let compScore = 0;
let round = 1;

playGame();


function playGame() {
    if (round == 1) {
        console.log("Start the game!");
    }
    else if (round>5) {
        if (compScore > humanScore) {
            console.log("YOU LOST HAHAHAHA");
        } else if (humanScore > compScore) {
            console.log("Wow big winner!");
        } else if (compScore == humanScore) {
            console.log("TIED");
        }
        return;
    } 
    const humanSelection = getHumanChoice();
    const compSelection = getComputerChoice();
    playRound(humanSelection, compSelection);
    round++;

    playGame();
    
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
        return;
    }

    const winConditions = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper",
    };

    if (winConditions[player] === computer) {
        humanScore++;
    } else {
        compScore++;
    }

}




