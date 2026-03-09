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

function incressHumanScure() {
    console.log ("human Wins");
    humanScore +=1;
}
function incressComputerScure() {
    console.log ("computer Wins");
    computerScore +=1;
}
function incressForBoth() {
    console.log ("It'sDraw");
    computerScore +=1;
    humanScore +=1;
}

function playRound(human , computer) {
    const humanWin = 
    human === 'paper' && computer === 'rock' ||
    human === 'scissors' && computer === 'paper'||
    human === 'rock' && computer === 'scissors';
    const drow = human === computer;
    if (drow)
        return incressForBoth()
    else if (humanWin)
        return incressHumanScure()
    else
        return incressComputerScure()
}

function playGame() {
    for(i=1;i<=5;i++)
    {
        console.log(playRound(getHumanChoice(),getComputerChoice()));
    }
}

playGame();

console.log(`Cumputer Score: ${computerScore}\n Human Score ${humanScore}`);

if (humanScore > computerScore)
console.log(`Human Wins`)
else
console.log("Computer Wins")