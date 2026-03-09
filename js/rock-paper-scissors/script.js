function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 10);
    if (computerChoice <= 3)
        return "rock"
    else if(computerChoice >3 && computerChoice <= 6)
        return "paper"
    else
        return "scissors"
}
