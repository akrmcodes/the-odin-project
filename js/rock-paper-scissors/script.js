let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0)
        return "rock"
    else if(computerChoice === 1)
        return "paper"
    else
        return "scissors"
}

function getHumanChoice(){
    let humanChoice = prompt("Type Your Choice", "scissors")
    return humanChoice.toLowerCase();
}

function increaseHumanScore() {
    console.log ("human Wins");
    humanScore +=1;
}
function increaseComputerScore() {
    console.log ("computer Wins");
    computerScore +=1;
}
function increaseForBoth() {
    console.log ("It'sDraw");
    computerScore +=1;
    humanScore +=1;
}

function playRound(human , computer) {
    const humanWin = 
    human === 'paper' && computer === 'rock' ||
    human === 'scissors' && computer === 'paper'||
    human === 'rock' && computer === 'scissors';
    const draw = human === computer;
    if (draw)
        return increaseForBoth()
    else if (humanWin)
        return increaseHumanScore()
    else
        return increaseComputerScore()
}

function playGame() {
    for(let i=1;i<=5;i++)
    {
        console.log(playRound(getHumanChoice(),getComputerChoice()));
    }
    console.log(`Computer Score: ${computerScore}\n Human Score ${humanScore}`);
    
    if (humanScore > computerScore) {
    console.log("Human Wins!");
    } else if (computerScore > humanScore) {
        console.log("Computer Wins!");
    } else {
        console.log("It's a Tie Game!");
}
}

playGame();