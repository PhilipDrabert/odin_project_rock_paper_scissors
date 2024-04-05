document.addEventListener("DOMContentLoaded", function() {
    const options = ["rock", "paper", "scissors"];
    let playerSelection = prompt("It's your turn.").toLocaleLowerCase();
    const getComputerChoice = function() {
        let randomNumber = Math.floor(Math.random() * 3);
        return options[randomNumber];
    }
    let computerSelection = getComputerChoice();
    const playRound = function(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return "It's a tie!"
        }
        else {
            switch (playerSelection) {
                case options[0]:
                    if (computerSelection === options[1]) {
                        return "You lose!";
                    } else {
                        return "You win!";
                    }
                case options[1]:
                    if (computerSelection === options[2]) {
                        return "You lose!";
                    } else {
                        return "You win!";
                    }
                case  options[2]:
                    if (computerSelection === options[0]) {
                        return "You lose!";
                    } else {
                        return "You win!";
                    }
            }
        }
    } 
   console.log(computerSelection)
   console.log(playRound(playerSelection, computerSelection))
});
