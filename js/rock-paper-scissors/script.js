let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 10);
    if (computerChoice <= 3)
        return "rock"
    else if(computerChoice >3 && computerChoice <= 6)
        return "paper"
    else
        return "scissors"
}

function getHumanChoice(){
    let humanChoice = prompt("Type Your Choice", "rock")
    return humanChoice.toLowerCase();
}