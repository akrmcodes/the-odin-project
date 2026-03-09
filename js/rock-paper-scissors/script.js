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
    let humanChoice = prompt("Type Your Choice", "scissors")
    return humanChoice.toLowerCase();
}

function playRound(human , computer) {
    const humanBeatsRock = human === 'paper' && computer === 'rock';
    const humanBeatsPaper = human === 'scissors' && computer === 'paper';
    const humanBeatsScissors = human === 'rock' && computer === 'scissors';
    const drow = human === computer;
    if (drow)
        return "It'sDraw"
    else if (humanBeatsRock)
        return "human Wins" 
    else if (humanBeatsPaper)
        return "human Wins"
    else if (humanBeatsScissors)
        return "human Wins"
    else
        return "copmuter Wins"
}